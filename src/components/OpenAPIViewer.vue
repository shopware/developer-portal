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

  p {
    margin: 0;
    line-height: 125%;
  }
}
</style>

<template>
  <div class="OpenAPIViewer">
    <div class="flex">

      <div class="OpenAPIViewer_sidebar basis-300px shrink-0 text-sm">
        <select v-model="documentModel" class="form-control">
          <option v-for="(title, key) in documentOptions" :value="key">{{ key }}</option>
        </select>

        <OpenApiViewerSidebarResponses @select-response="selectResponse" />
        <OpenApiViewerSidebarEndpoints @select-endpoint="select" />
        <OpenApiViewerSidebarSchemas @select-schema="selectSchema" />
      </div>

      <OpenApiViewerPageSchema v-if="schema" :schema="schema" />
      <OpenApiViewerPageResponse v-else-if="response" :response="response" />
      <OpenApiViewerPageEndpoint v-else-if="endpoint" :endpoint="endpoint" :path="selectedPath" :method="selectedMethod" />

    </div>
  </div>
</template>

<script setup lang="ts">
import {OpenAPIV3} from "openapi-types";
//import OASNormalize from 'oas-normalize';
import storeApi from './storeapi.json'
import adminApi from './adminapi.json'
import {ref, computed, watch, provide} from "vue";
import {Document} from "./openApi/openApi";

const documentModel = ref('storeApi');
const documentOptions = {
  storeApi,
  adminApi,
};

import OpenApiViewerPageEndpoint from "./page/OpenApiViewerPageEndpoint.vue";
import OpenApiViewerPageSchema from "./page/OpenApiViewerPageSchema.vue";
import OpenApiViewerPageResponse from "./page/OpenApiViewerPageResponse.vue";

import OpenApiViewerSidebarEndpoints from "./sidebar/OpenApiViewerSidebarEndpoints.vue";
import OpenApiViewerSidebarSchemas from "./sidebar/OpenApiViewerSidebarSchemas.vue";
import OpenApiViewerSidebarResponses from "./sidebar/OpenApiViewerSidebarResponses.vue";

import {documentObjectSymbol} from "./openApi/symbol";

//const oas = new OASNormalize(jsonApi);

const documentObject = ref(null);//await oas.deref() as OpenAPIV3.Document;

const selectedPath = ref(null);
const selectedMethod = ref(null);
const selectedSchema = ref(null);
const selectedResponse = ref(null);

const selectedMode = ref(null);

const deselect = () => {
  selectedMode.value = null;
  selectedPath.value = null;
  selectedMethod.value = null;
  selectedSchema.value = null;
  selectedResponse.value = null;
}

const select = ({method, path}) => {
  deselect();
  selectedMode.value = 'path';
  selectedPath.value = path;
  selectedMethod.value = method;
}

const selectSchema = (key) => {
  deselect();
  selectedMode.value = 'schema';
  selectedSchema.value = key;
}

const selectResponse = ({code}) => {
  deselect();
  selectedMode.value = 'response';
  selectedResponse.value = code;
}

watch(
    documentModel,
    () => {
      deselect();
      documentObject.value = Document.make(documentOptions[documentModel.value]);
    },
    {
      immediate: true,
    }
);

provide(
    documentObjectSymbol,
    documentObject
);

const endpoint = computed(() => {
  if (!documentObject.value || !selectedPath.value || !selectedMethod.value) {
    return null;
  }

  return documentObject.value.paths[selectedPath.value][selectedMethod.value];
})

const schema = computed(() => {
  if (!documentObject.value || !selectedSchema.value) {
    return null;
  }

  return documentObject.value.components.schemas[selectedSchema.value];
})

const response = computed(() => {
  if (!documentObject.value || !selectedResponse.value) {
    return null;
  }

  return documentObject.value.components.responses[selectedResponse.value];
})
</script>