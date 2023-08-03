<template>
  <div class="OpenApiViewerPageResponse">
    <h1>{{ response.key }} {{ response.description }}</h1>
    {{ Object.keys(response) }}

    <div v-if="'content' in response">
      <OpenApiViewerEndpointResponses :endpoint="{responses: response.content}" />
    </div>
  </div>
</template>

<script setup lang="ts">
import {inject} from "vue";
import {documentObjectSymbol} from "../openApi/symbol";
import OpenApiViewerEndpointResponses from "../OpenApiViewerEndpointResponses.vue";
import OpenApiViewerMagic from "../OpenApiViewerMagic.vue";

const documentObject = inject(documentObjectSymbol);

const props = defineProps({
  response: {},
})
</script>