<template>

  <b>Responses</b>
  <ul class="no-list">
    <li v-for="(response, code) in documentObject.components.responses">
      <a href="#" class="OpenAPIViewer_link" @click.prevent="$emit('select-response', {code})">
        {{ code }} {{ response.description }}
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