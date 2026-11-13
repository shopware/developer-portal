<template>
  <div class="SwagCopilotNew">
    <shopware-chatbot
      v-if="registered"
      class="SwagCopilotNew_chatbot"
      api-base="https://mcp.web.shopware.in/api/v1/chatbot/public/intelligent/stream"
    />
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';

const registered = ref(false);

onMounted(async () => {
  await import('@shopware/chatbot');

  if (!customElements.get('shopware-chatbot')) {
    throw new Error('Shopware chatbot was not registered');
  }

  registered.value = true;
});
</script>

<style lang="scss">
.SwagCopilotNew {
  width: 100%;
  max-width: 56rem;
  min-height: min(760px, calc(100vh - var(--vp-nav-height)));
  margin: 0 auto;
  padding: 1rem;

  &_chatbot {
    display: block;
    height: 100%;
    min-height: inherit;
    overflow: hidden;
    border-radius: 1rem;
    --sw-chatbot-bg: var(--vp-c-bg-soft);
    --sw-chatbot-panel-raised: var(--vp-c-bg);
    --sw-chatbot-panel-soft: var(--vp-c-bg-soft);
    --sw-chatbot-border: var(--vp-c-divider);
    --sw-chatbot-border-width: 1px;
    --sw-chatbot-text: var(--vp-c-text-1);
    --sw-chatbot-muted: var(--vp-c-text-2);
    --sw-chatbot-accent: var(--vp-c-brand-1);
    --sw-chatbot-accent-strong: var(--vp-c-brand-2);
  }
}
</style>
