<template>
  <div class="SwagCopilotNew">

    <shopware-chatbot
      v-if="registered"
      class="SwagCopilotNew_chatbot"
      api-base="https://mcp.web.shopware.in/api/v1/chatbot/public/intelligent/stream"
      :shopware-version="selectedVersion"
      chatbot-kind="public_embed"
      title="Developer Docs Mentor"
      assistant-name="Developer Docs Mentor"
      intro="Ask about Shopware developer docs, implementation steps, and troubleshooting checks."
    />

    <div class="SwagCopilotNew_versionSelector">
      <label for="shopware-version">Shopware version:</label>
      <select
        id="shopware-version"
        v-model="selectedVersion"
        @change="updateVersionQuery"
      >
        <option value="6.7">6.7 (latest)</option>
        <option value="6.6">6.6</option>
        <option value="6.5">6.5</option>
      </select>
    </div>
  </div>
</template>

<style lang="scss">
.SwagCopilotNew_versionSelector {
  margin-right: 1.25rem;
  display: flex;
  justify-self: end;
  font-size: 14px;
  gap: .5rem;
  align-items: center;
  color: var(--c-text-light);
  margin-bottom: 4rem;
}

.SwagCopilotNew_versionSelector select {
  background: transparent;
  font-size: 14px;
  cursor: pointer;
}
</style>

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

const supportedVersions = ['6.7', '6.6', '6.5'] as const
type ShopwareVersion = typeof supportedVersions[number]

const requestedVersion = new URLSearchParams(window.location.search).get('version')
const selectedVersion = ref<ShopwareVersion>(
  supportedVersions.includes(requestedVersion as ShopwareVersion)
    ? requestedVersion as ShopwareVersion
    : '6.7',
)

function updateVersionQuery() {
  const url = new URL(window.location.href)
  url.searchParams.set('version', selectedVersion.value)
  window.history.replaceState(window.history.state, '', url)
}
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
