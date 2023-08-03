<template>
  Displaying {{ $props.api }}-api, {{ $props.endpoint }}, {{ $props.method }}, {{ $props.scheme }}
  <!--
  <OpenApi api="store" endpoint="/api/script/{hook}" method="post" />
  <OpenApi api="admin" scheme="App" />
  -->
</template>

<script setup lang="ts">
const props = defineProps({
  api: {
    required: true,
  },
  endpoint: {},
  method: {},
  scheme: {},
})
</script>