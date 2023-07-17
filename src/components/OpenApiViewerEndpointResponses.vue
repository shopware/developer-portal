<template>
  <div data-endpoint-responses>
    <div v-for="(response, code) in endpoint.responses">
      <div>
        <h5><span class="OpenAPIViewer_response-code" :class="`--${code[0]} --${code}`">{{ code }}</span>
        </h5>
      </div>

      <OpenApiViewerMagic :data="response" :document="document" />
    </div>
  </div>
</template>

<script setup lang="ts">
import OpenApiViewerMagic from "./OpenApiViewerMagic.vue";
import {OpenAPIV3} from "openapi-types";

// the most probable approach here is to use js/ts to map the tree and de-ref the document
// then re-ref everything and make every object expandable and reffed

const props = defineProps({
  endpoint: {
    type: Object as OpenAPIV3.PathItemObject
  },
  document: {
    type: Object as OpenAPIV3.Document,
  }
})

</script>