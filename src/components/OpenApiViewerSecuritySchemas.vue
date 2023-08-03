<template>
  <div class="OpenApiViewerSecuritySchemas">

    <div v-for="(schema, key) in document.components.securitySchemes"
    class="OpenApiViewerSecuritySchema">
      <div class="font-medium">{{ schema.title }}</div>

      <div>{{ schema.description }}</div>

      <div v-if="schema.in === 'header'">
        In header {{ schema.name }}
      </div>
      <div v-else class="hidden">No schema.in: {{ schema }}</div>

      <div v-for="(flow, type) in schema.flows">
        <b>{{ flow.title }}</b><br /><br />
        Token URL: <a :href="flow.tokenUrl">{{ flow.tokenUrl }}</a><br /><br />
        Scopes:
        <ul>
          <li v-for="(scope, scopeKey) in flow.scopes">
            <code>{{ scopeKey }}</code> - {{ scope }}
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import {inject} from "vue";
import {documentObjectSymbol} from "./openApi/symbol";

const document = inject(documentObjectSymbol);
</script>

<style lang="scss">
.OpenApiViewerSecuritySchemas {
  @apply border border-black border-solid p-4;
  border-radius: 1rem;
}
.OpenApiViewerSecuritySchema {

}
</style>