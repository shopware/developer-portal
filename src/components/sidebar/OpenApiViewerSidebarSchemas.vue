<template>

  <b>Schemas</b>
  <ul class="no-list">
    <li v-for="(schema, key) in documentObject.components.schemas">
      <a href="#" class="OpenAPIViewer_link" @click.prevent="$emit('select-schema', key)">
        {{ key }}
      </a>
    </li>
  </ul>

</template>

<script setup lang="ts">
import {inject} from "vue";
import {documentObjectSymbol} from "../openApi/symbol";

const $emit = defineEmits(['select-schema']);
const documentObject = inject(documentObjectSymbol);
</script>