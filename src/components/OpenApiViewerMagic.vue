<style lang="scss">
.OpenApiProp {
  &_title {
    @apply font-bold;
  }
  &_type {
    @apply ml-2;
     color: var(--sw-c-gray-dark-100);
  }
  &_required {
    @apply ml-2 text-[var(--sw-c-pink-400)];
  }
}
.OpenApiProps_table,
.OpenApiProp_row, {
  border-collapse: collapse;
  border-bottom: 1px solid var(--sw-c-gray-dark-100);
}
</style>

<template>
  <template v-if="depth > 5">
    <a href="#" v-if="!showMore" @click.prevent="showMore = true">
      -- show more -- <span class="hidden">{{ data }}</span>
    </a>
    <OpenApiViewerMagic v-else
                        :data="data" />
  </template>
  <template v-else>

    <div v-if="data.properties" class="OpenApiProps_table pl-4 grid" data-properties>
      <div v-for="(property, key) in data.properties" class="OpenApiProp_row">

        <span class="OpenApiProp_title">{{ key }}</span>
        <span v-if="data.type" class="OpenApiProp_type">{{ data.type }}</span>
        <span v-if="data.required" class="OpenApiProp_required">required</span>

        <OpenApiViewerMagic v-if="key === '$ref'"
                            :data="getRef(property)"
                            :depth="depth + 1"/>
        <OpenApiViewerMagic v-else-if="property && typeof property === 'object' && '$ref' in property"
                            :data="getRef(property['$ref'])"
                            :depth="depth + 1"/>
        <OpenApiViewerMagic v-else
                            :data="property"
                            :depth="depth + 1"/>
      </div>
    </div>

    <div v-if="data.additionalProperties" class="OpenApiProps_table pl-4 grid" data-additional-properties>
      <div v-for="(property, key) in data.additionalProperties">
        <span>{{ key }}</span>
        <OpenApiViewerMagic v-if="key === '$ref'"
                            :data="getRef(property)"
                            :depth="depth + 1"/>
        <OpenApiViewerMagic v-else-if="property && typeof property === 'object' && '$ref' in property"
                            :data="getRef(property['$ref'])"
                            :depth="depth + 1"/>
        <OpenApiViewerMagic v-else :data="property"
                            :depth="depth + 1"/>
      </div>
    </div>

    <template v-if="'$ref' in data">
      {{ data['$ref'] }}
      <OpenApiViewerMagic :data="getRef(data['$ref'])"
                          :depth="depth + 1"/>
    </template>

    <div v-if="'schema' in data" data-schema>
      <OpenApiViewerMagic :data="data.schema"
                          :depth="depth + 1"/>
    </div>

    <div v-if="data.example" data-example v-html="renderedExample"></div>

    <div v-if="'allOf' in data" data-all-of>
      All of:
      <OpenApiViewerMagic v-for="single in data.allOf"
                          :data="single"
                          :depth="depth + 1"/>
    </div>

    <div v-if="'oneOf' in data" data-one-of>
      One of:
      <OpenApiViewerMagic v-for="single in data.oneOf"
                          :data="single"
                          :depth="depth + 1"/>
    </div>

    <div v-if="'anyOf' in data" data-any-of>
      Any of:
      <OpenApiViewerMagic v-for="single in data.anyOf"
                          :data="single"
                          :depth="depth + 1"/>
    </div>

    <div v-if="data.description"
         data-description
         v-html="MarkdownRenderer.render(data.description)"></div>

    <div class="grid gap-2" v-if="data.content" data-content>
      <div v-for="(subschema, type) in data.content">
        <h6>{{ type }}</h6>
        <OpenApiViewerMagic :data="subschema"
                            :depth="depth + 1"/>
      </div>
    </div>

    <!--<div class="grid gap-2" v-if="data['$ref']">
      <OpenApiViewerUnref :content="getRef(data)" :document="document"/>
    </div>-->
  </template>
</template>

<script setup lang="ts">
//import OpenApiViewerMagic from "./OpenApiViewerMagic.vue";
import OpenApiViewerUnref from "./OpenApiViewerUnref.vue";
import {computed, inject, ref} from "vue";
import {OpenAPIV3} from "openapi-types";
import MarkdownIt from 'markdown-it'
import {documentObjectSymbol} from "./openApi/symbol";
import {render} from "./openApi/markdown";

const MarkdownRenderer = MarkdownIt({});

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
  depth: {
    default: 0,
  }
})

const getRef = computed(() => (ref) => {
  if (!ref) {
    return {};
  }
  if (ref.startsWith('#/components/')) {
    const [hash, components, responses, code] = ref.split('/');
    console.log(hash, components, responses, code);
    return document.value[components][responses][code] || {};
  }
  console.log(ref);
  return {};//ref;
})

const showMore = ref(false);

const document = inject(documentObjectSymbol);

const renderedExample = computed(async () => {
  return await render(JSON.stringify(`\`\`\`
${JSON.stringify(props.data.example)}
\`\`\``))
})
</script>