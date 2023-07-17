<style lang="scss">
.OpenAPIViewer {
  &_sidebar {
    height: 90vh;
    overflow-x: auto;
  }

  &_content {
    @apply px-12;
    max-width: 1600px;
    margin: 0 auto;
  }

  &_doc {
  }

  &_playground {
  }

  &_link {
    @apply text-xs;
  }

  &_method,
  &_response-code {
    color: white;
  }

  &_method {
    @apply px-2 py-1 rounded-sm;
    &.--post {
      @apply bg-[var(--sw-c-blue-vivacious-900)];
    }

    &.--get {
      @apply bg-[var(--sw-c-blue-vivacious-600)];
    }

    &.--patch {
      @apply bg-[var(--sw-c-blue-vivacious-300)];
    }

    &.--delete {
      @apply bg-[var(--sw-c-pink-900)];
    }
  }

  &_response-code {
    @apply px-2 py-1 rounded-sm;

    &.--2 {
      @apply bg-[var(--sw-c-blue-vivacious-900)];
    }

    &.--3 {
      @apply bg-[var(--sw-c-green-500)];
    }

    &.--4 {
      @apply bg-[var(--sw-c-pink-400)];
    }

    &.--5 {
      @apply bg-[var(--sw-c-pink-900)];
    }

    &.--404 {
      @apply bg-red;
    }
  }
}
</style>

<template>
  <div class="OpenAPIViewer">
    <div class="flex">

      <div class="OpenAPIViewer_sidebar basis-300px shrink-0 text-sm">
        <div v-for="(endpoints, path) in groupedPaths">
          <ul class="no-list">
            {{ endpoints[0].tags[0] }} ({{ endpoints.length }})
            <li v-for="endpoint in endpoints">
              <a href="#" class="OpenAPIViewer_link" @click.prevent="select(endpoint.method, endpoint.path)">
                <span class="OpenAPIViewer_method" :class="`--${endpoint.method}`">{{ endpoint.method }}</span>
                {{ endpoint.summary }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="OpenAPIViewer_content grid gap-12" v-if="endpoint">
        <!--<template v-for="(methods, path) in documentObject.paths">
          <div class="grid gap-8">-->
        <div data-v-for="(endpoint, method) in methods"
             class="flex gap-8 relative items-start">
          <div class="OpenAPIViewer_doc">
            <h1>{{ endpoint.summary }}</h1>
            <div>
              <div class="c-any-card">
                <span class="OpenAPIViewer_method" :class="`--${selectedMethod}`">{{ selectedMethod }}</span>
                http://localhost:8000/api{{ selectedPath }}
              </div>
            </div>
            <p data-endpoint-description>{{ endpoint.description }}</p>
            <!--<div>Tags: {{ endpoint.tags }}</div>-->
            <p data-endpoint-operationId>{{ endpoint.operationId }}</p>

            <h2>Request</h2>
            <OpenApiViewerEndpointParameters :endpoint="endpoint"/>

            <h2>Response</h2>
            <OpenApiViewerEndpointResponses :endpoint="endpoint" :document="documentObject"/>
          </div>
          <div class="OpenAPIViewer_playground basis-2/5 flex shrink-0 grow-0"
               style="position: sticky; top: 100px;">
            <OpenApiViewerEndpointPlayground :endpoint="endpoint" :document="documentObject"/>
          </div>
        </div>
        <!--</div>
      </template>-->
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import {OpenAPIV3} from "openapi-types";
//import OASNormalize from 'oas-normalize';
import jsonApi from './storeapi.json'
import {ref, computed} from "vue";

import OpenApiViewerEndpointParameters from "./OpenApiViewerEndpointParameters.vue";
import OpenApiViewerEndpointResponses from "./OpenApiViewerEndpointResponses.vue";
import OpenApiViewerEndpointPlayground from "./OpenApiViewerEndpointPlayground.vue";

//const oas = new OASNormalize(jsonApi);

const documentObject = jsonApi;//await oas.deref() as OpenAPIV3.Document;

const selectedPath = ref(null);
const selectedMethod = ref(null);

const select = (method, path) => {
  selectedPath.value = path;
  selectedMethod.value = method;
}

const endpoint = computed(() => {
  if (!selectedPath.value || !selectedMethod.value) {
    return null;
  }

  return documentObject.paths[selectedPath.value][selectedMethod.value];
})

const groupedPaths = computed(() => {
  return Object.entries(documentObject.paths)
      .reduce((reduced, [path, endpoints]) => {
        const partialPath = path.split('/')
            .map(part => part.startsWith('{') ? '{}' : part)
            .filter(part => part !== '{}')
            .join('/');

        // add the method
        const mappedEndpoints = Object.entries(endpoints)
            .map(([httpMethod, method]) => {
              method.path = path;
              method.method = httpMethod;
              return method;
            })

        console.log(partialPath);
        if (!reduced[partialPath]) {
          reduced[partialPath] = [];
        }

        reduced[partialPath].push(...mappedEndpoints);

        return reduced;
      }, {})
})
</script>