<template>
  <div class="SwagChangelogWrapper my-10 p-10 c-flat-card">
    <span class="h-label">What's new?</span>
    <h2 class="h-homepage">Stay in sync with Shopware</h2>

    <div class="SwagChangelogWrapper_grid gap-10 items-start">
      <div class="c-border-gradient rounded-md">
        <div class="grid gap-4 rounded-md p-5 --apply-bg">
          <h3 class="SwagChangelogWrapper_title">
            Changelog
            <a href="https://github.com/shopware/platform/blob/trunk/CHANGELOG.md"
               target="_blank"
               class="SwagChangelogWrapper_link">
              View on GitHub
              <SwagIcon icon="external-link-s" />
            </a>
          </h3>
          <SwagChangelog />
        </div>
      </div>
      <div class="grid gap-5">
        <PageRef page="/docs/" title="Developer docs" sub="Know the technology behind Shopware, its features and how it can be extended." />
        <PageRef page="https://docs.shopware.com/" target="_blank" title="User docs" sub="Know how to setup and configure your shop." />
        <PageRef page="https://brand.shopware.com/" target="_blank" title="Design docs" sub="Know the design principles of Shopware and get access to icons, components, tokens." />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SwagChangelog from "./SwagChangelog.vue";
</script>

<style lang="scss">
.SwagChangelogWrapper {
  @apply bg-[var(--sw-c-gray-50)];
  &_grid {
    @apply grid;
    @media (min-width: 768px) {
      grid-template-columns: 2fr 3fr;
    }
  }
  &_title {
    @apply flex justify-between items-center;
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.5rem;
    letter-spacing: 0.005rem;
  }
  &_link {
    @apply flex items-center;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
    letter-spacing: 0.01094rem;
    text-decoration-line: underline;

    .SwagIcon {
      height: .625rem;
    }
  }
}
</style>