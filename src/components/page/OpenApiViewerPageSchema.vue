<template>
  <div class="OpenApiViewerPageSchema">
    <h1>{{ schema.key }} ({{ schema.type }})</h1>
    <div v-html="render(schema.description)"></div>

    <!--AllOf: {{ schema.allOf }}<br />
    OneOf: {{ schema.oneOf }}<br />
    AnyOf: {{ schema.anyOf }}<br />

    Required: {{ schema.required }}<br />

    Properties: {{ schema.properties }}<br />
    AdditionalProperties: {{ schema.additionalProperties }}<br />

    Items: {{ schema.items }}<br />
    UniqueItems: {{ schema.uniqueItems }}<br />-->

    <div class="text-xs">
      <OpenApiViewerMagic :data="schema" :document="documentObject"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import OpenApiViewerMagic from "../OpenApiViewerMagic.vue";
import {render} from "../openApi/markdown";
import {inject} from "vue";
import {documentObjectSymbol} from "../openApi/symbol";

const documentObject = inject(documentObjectSymbol);

const props = defineProps({
  schema: {},
})
</script>