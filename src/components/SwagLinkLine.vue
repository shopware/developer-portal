<template>
  <div class="c-link-line">
    <a v-if="file"
       :href="`https://github.com/${repo}/edit/${branch}/${file}`">
      <SwagIcon icon="github"/>
      Edit this page on GitHub</a>
    <a href="#" @click.prevent="copyMarkdownLink">
      <SwagIcon icon="external-link-s"/>
      {{ copyButtonText }}</a>
    <a :href="`https://stackoverflow.com/questions/ask${tags}`">
      <SwagIcon icon="stackoverflow"/>
      Ask question on Stackoverflow</a>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

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

const copyButtonText = ref('Copy Markdown Link');

async function copyMarkdownLink() {
  const url = window.location.href.replace(/\.html$/, '.md');

  try {
    await navigator.clipboard.writeText(url);
    copyButtonText.value = 'Copied!';
    setTimeout(() => {
      copyButtonText.value = 'Copy Markdown Link';
    }, 2000);
  } catch (err) {
    console.error('Failed to copy:', err);
  }
}
</script>