<template>

  <b>Endpoints</b>
  <div v-for="(endpoints, path) in groupedPaths">
    <ul class="no-list">
      {{ endpoints[0].tags[0] }} ({{ endpoints.length }})
      <li v-for="endpoint in endpoints">
        <a href="#" class="OpenAPIViewer_link" @click.prevent="$emit('select-endpoint', {method: endpoint.method, path: endpoint.path})">
          <span class="OpenAPIViewer_method" :class="`--${endpoint.method}`">{{ endpoint.method }}</span>
          {{ endpoint.summary }}
        </a>
      </li>
    </ul>
  </div>

</template>

<script setup lang="ts">
import {computed, inject} from "vue";
import {documentObjectSymbol} from "../openApi/symbol";

const $emit = defineEmits(['select-schema']);
const documentObject = inject(documentObjectSymbol);

const groupedPaths = computed(() => Object.entries(documentObject.value?.paths || {})
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

      if (!reduced[partialPath]) {
        reduced[partialPath] = [];
      }

      reduced[partialPath].push(...mappedEndpoints);

      return reduced;
    }, {}))
</script>