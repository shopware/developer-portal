<template>
  <template v-if="depth > 5">
    -- show more -- <span class="hidden">{{ data }}</span>
  </template>
  <template v-else>
    <span class="hidden">{{ Object.keys(data) }}</span>

    <span v-if="data.required" data-required>*</span>
    <span v-if="data.type" class="italic">{{ data.type }}</span>

    <div v-if="data.properties" class="pl-4 grid" data-properties>
      <div v-for="(property, key) in data.properties">
        <span>{{ key }}</span>
        <OpenApiViewerMagic v-if="key === '$ref'"
                            :data="getRef(property)"
                            :document="document"
                            :depth="depth + 1"/>
        <OpenApiViewerMagic v-else-if="property && typeof property === 'object' && '$ref' in property"
                            :data="getRef(property['$ref'])"
                            :document="document"
                            :depth="depth + 1"/>
        <OpenApiViewerMagic v-else :data="property"
                            :document="document"
                            :depth="depth + 1"/>
      </div>
    </div>

    <div v-if="data.additionalProperties" class="pl-4 grid" data-additional-properties>
      <div v-for="(property, key) in data.additionalProperties">
        <span>{{ key }}</span>
        <OpenApiViewerMagic v-if="key === '$ref'"
                            :data="getRef(property)"
                            :document="document"
                            :depth="depth + 1"/>
        <OpenApiViewerMagic v-else-if="property && typeof property === 'object' && '$ref' in property"
                            :data="getRef(property['$ref'])"
                            :document="document"
                            :depth="depth + 1"/>
        <OpenApiViewerMagic v-else :data="property"
                            :document="document"
                            :depth="depth + 1"/>
      </div>
    </div>

    <template v-if="'$ref' in data">
      {{ data['$ref'] }}
      <OpenApiViewerMagic :data="getRef(data['$ref'])" :document="document"
                          :depth="depth + 1"/>
    </template>

    <div v-if="'schema' in data" data-schema>
      <OpenApiViewerMagic :data="data.schema" :document="document"
                          :depth="depth + 1"/>
    </div>

    <p v-if="data.example" data-example>{{ data.example }}</p>

    <div v-if="'allOf' in data" data-all-of>
      All of:
      <OpenApiViewerMagic v-for="single in data.allOf" :data="single" :document="document"
                          :depth="depth + 1"/>
    </div>

    <div v-if="'oneOf' in data" data-one-of>
      One of:
      <OpenApiViewerMagic v-for="single in data.oneOf" :data="single" :document="document"
                          :depth="depth + 1"/>
    </div>

    <p v-if="data.description" data-description>{{ data.description }}</p>

    <div class="grid gap-2" v-if="data.content" data-content>
      <div v-for="(subschema, type) in data.content">
        <h6>{{ type }}</h6>
        <OpenApiViewerMagic :data="subschema" :document="document"
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
import {computed} from "vue";
import {OpenAPIV3} from "openapi-types";

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
  document: {
    type: Object as OpenAPIV3.Document,
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
    return props.document[components][responses][code] || {};
  }
  console.log(ref);
  return {};//ref;
})
</script>