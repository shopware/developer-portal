<template>
  <div class="OpenAPIViewer_content grid gap-12">
    <div data-v-for="(endpoint, method) in methods"
         class="flex gap-8 relative items-start">
      <div class="OpenAPIViewer_doc text-xs">
        <h1>{{ endpoint.summary }}</h1>

        <div>
          <div class="c-any-card">
            <span class="OpenAPIViewer_method" :class="`--${method}`">{{ method }}</span>
            http://localhost:8000/api{{ path }}
          </div>
        </div>

        <div data-endpoint-description v-if="endpoint.description"
             v-html="render(endpoint.description)"></div>

        <!--<div>Tags: {{ endpoint.tags }}</div>-->
        <p data-endpoint-operationId>{{ endpoint.operationId }}</p>

        <h2>Request</h2>

        <OpenApiViewerSecuritySchemas />

        <OpenApiViewerEndpointParameters :endpoint="endpoint"/>

        <h2>Response</h2>
        <OpenApiViewerEndpointResponses :endpoint="endpoint" :document="documentObject"/>
      </div>
      <div class="OpenAPIViewer_playground basis-2/5 flex shrink-0 grow-0"
           style="position: sticky; top: 100px;">
        <OpenApiViewerEndpointPlayground :endpoint="endpoint" :document="documentObject"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import {inject} from "vue";
import {render} from "../openApi/markdown";
import OpenApiViewerEndpointPlayground from "../OpenApiViewerEndpointPlayground.vue";
import OpenApiViewerEndpointParameters from "../OpenApiViewerEndpointParameters.vue";
import OpenApiViewerEndpointResponses from "../OpenApiViewerEndpointResponses.vue";
import {documentObjectSymbol} from "../openApi/symbol";
import OpenApiViewerSecuritySchemas from "../OpenApiViewerSecuritySchemas.vue";

const props = defineProps({
  endpoint: {},
  path: {},
  method: {}
});

const documentObject = inject(documentObjectSymbol)
</script>