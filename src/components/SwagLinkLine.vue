<template>
  <div class="c-link-line">
    <a v-if="file"
       :href="`https://github.com/${repo}/edit/${branch}/${file}`">
      <SwagIcon icon="github"/>
      Edit this page on GitHub</a>
    <a :href="`https://stackoverflow.com/questions/ask${tags}`">
      <SwagIcon icon="stackoverflow"/>
      Ask question on Stackoverflow</a>
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps({
  file: {
    required: false,
  },
  repo: {
    required: false,
    default: 'shopware/developer-portal',
  },
  branch: {
    required: false,
    default: 'main',
  },
  tags: {
    required: false,
    default: '?tags=shopware',
  },
});
</script>