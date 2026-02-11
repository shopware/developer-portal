<template>
    <div class="edit-info">
        <div class="edit-link">
            <button type="button" class="edit-link-button" @click="copyMarkdownLink">
                <span class="vpi-document-copy edit-link-icon" />
                {{ copyButtonText }}
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const copyButtonText = ref('Copy Markdown Link');

async function copyMarkdownLink() {
  let url = window.location.href;

  if (url.endsWith('.html')) {
    url = url.replace(/\.html$/, '.md');
  } else if (url.endsWith('/')) {
    url = url + 'index.md';
  } else {
    url = url + '.md';
  }

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

<style scoped>
.edit-link-icon {
  margin-right: 8px;
  width: 14px;
  height: 14px;
  fill: currentColor;
}

.edit-link-button {
  display: flex;
  align-items: center;
  border: 0;
  background: none;
  padding: 0;
  line-height: 32px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-brand-1);
  transition: color 0.25s;
  cursor: pointer;
}

.edit-link-button:hover {
  color: var(--vp-c-brand-2);
}
</style>
