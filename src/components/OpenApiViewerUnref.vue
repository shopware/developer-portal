<template>
  {{ content }}
  <div v-for="(value, key) in content">
    {{ key }}: {{ value }}
  </div>
</template>

<script setup lang="ts">
import {OpenAPIV3} from "openapi-types";

const props = defineProps({
  content: {
    type: Object
  },
  document: {
    type: Object as OpenAPIV3.Document,
  }
})
</script>