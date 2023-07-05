<template>
  <div class="SwagChangelogWrapper my-10 p-10 c-flat-card">
    <span class="h-label">What's new?</span>
    <h2 class="text-4xl tracking-wide mb-10 isolated">Stay in sync with Shopware</h2>

    <div class="SwagChangelogWrapper_grid py-10 my-10 gap-10 items-start">
      <div class="c-border-gradient rounded-md">
        <div class="grid gap-4 rounded-md p-5 --apply-bg">
          <h3 class="flex justify-between items-center">Changelog <a href="#" class="text-xs">View on GitHub</a></h3>
          <SwagChangelog />
        </div>
      </div>
      <div class="grid gap-5">
        <PageRef page="/docs/" title="Developer docs" sub="Know the technology behind Shopware, its features and how it can be extended." />
        <PageRef page="https://docs.shopware.com/" title="User docs" sub="Know how to setup and configure your shop." />
        <PageRef page="https://brand.shopware.com/" title="Design docs" sub="Know the design principles of Shopware and get access to icons, components, tokens." />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SwagChangelog from "./SwagChangelog.vue";
</script>

<style lang="scss">
.SwagChangelogWrapper {
  &_grid {
    @apply grid;
    grid-template-columns: 2fr 3fr;
  }
}
</style>