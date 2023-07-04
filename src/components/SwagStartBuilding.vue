<template>
  <div class="SwagStartBuilding">
    <span class="h-label">Start building</span>
    <h2 class="text-4xl tracking-wide mb-10 isolated">Get to know Shopware</h2>

    <div class="SwagStartBuilding_grid">

      <a href="#" class="SwagStartBuilding_item row-span-2">
        <img src="/home/build-apps.svg" />
        <span class="SwagStartBuilding_icon">
          <SwagIcon icon="plug" mode="solid" />
        </span>
        <span class="SwagStartBuilding_heading">
          Build an app
          <SwagIcon icon="long-arrow-right" mode="solid" />
        </span>
        <p>Boost or expand your store's capabilities with the simplicity of apps, a must-have for developers seeking to elevate their digital marketplace.</p>
      </a>

      <a href="#" class="SwagStartBuilding_item row-span-2">
        <img src="/home/build-frontends.svg" />
        <span class="SwagStartBuilding_icon">
          <SwagIcon icon="storefront" mode="solid" />
        </span>
        <span class="SwagStartBuilding_heading">
          Build custom frontends
          <SwagIcon icon="long-arrow-right" mode="solid" />
        </span>
        <p>Build unique and captivating custom storefronts using Store APIs and SDKs, or start with reference implementations using technologies like Vue.js or React.</p>
      </a>

      <a href="#" class="SwagStartBuilding_item">
        <span class="SwagStartBuilding_icon">
          <SwagIcon icon="storefront" mode="solid" />
        </span>
        <span class="SwagStartBuilding_heading">
          Build a theme
          <SwagIcon icon="long-arrow-right" mode="solid" />
        </span>
        <p>Style your store with unparalleled flexibility using custom-built or third-party themes.</p>
      </a>

      <a href="#" class="SwagStartBuilding_item">
        <span class="SwagStartBuilding_icon">
          <SwagIcon icon="storefront" mode="solid" />
        </span>
        <span class="SwagStartBuilding_heading">
          Integrations
          <SwagIcon icon="long-arrow-right" mode="solid" />
        </span>
        <p>Integrate with third-party systems through powerful APIs.</p>
      </a>

    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
.SwagStartBuilding {
  &_grid {
    @apply grid gap-6 md:grid-cols-2 lg:grid-cols-3;
  }

  &_item {
    @apply rounded-md p-8 border border-solid border-[var(--sw-c-blue-vivacious-100)] bg-[var(--sw-c-blue-vivacious-50)];
    @apply hover:border-[var(--sw-c-blue-vivacious-200)] hover:bg-[var(--sw-c-blue-vivacious-100)]
  }

  &_icon {
    @apply rounded-md flex bg-[var(--sw-c-gray-dark-500)] p-2;
    color: white;
    aspect-ratio: 1;
    height: 28px;
    box-sizing: content-box;
    align-items: center;
    justify-content: center;
    .SwagIcon {
      width: 20px;
      height: 20px;
    }
  }

  &_heading {
    @apply flex gap-2 items-center;
    color: var(--neutrals-darkgray-900, #0A0D0F);
    font-size: 1.25rem;
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    line-height: 2.625rem;

    .SwagIcon {
      width: 1rem;
      height: 1rem;
    }
  }

  p {
    margin: 0;
    color: var(--c-text);
  }
}
</style>