<template>
  <div class="SwagStartBuilding">
    <span class="h-label">Start building</span>
    <h2 class="h-homepage">Build the extraordinary</h2>

    <div class="SwagStartBuilding_grid">

      <a href="/apps.html" class="HomepageCard_item row-span-2">
        <img src="/home/build-apps.svg" class="w-full SwagStartBuilding_image-ratio" />
        <span class="HomepageCard_icon -mt-2">
          <SwagIcon icon="plug" type="solid" />
        </span>
        <span class="HomepageCard_heading">
          Build an app
          <SwagIcon icon="long-arrow-right" type="solid" />
        </span>
        <p>Boost or expand your store's capabilities with the simplicity of apps, a must-have for developers seeking to elevate their digital marketplace.</p>
      </a>

      <a href="https://frontends.shopware.com/" target="_blank" class="HomepageCard_item row-span-2">
        <div class="SwagStartBuilding_image-wrapper">
          <img src="/home/build-frontends.svg" class="w-full SwagStartBuilding_image-ratio u-gradient-image" />
        </div>
        <span class="HomepageCard_icon -mt-2">
          <SwagIcon icon="storefront" type="solid" />
        </span>
        <span class="HomepageCard_heading">
          Build custom frontends
          <SwagIcon icon="long-arrow-right" type="solid" />
        </span>
        <p>Build unique and captivating custom storefronts using Store APIs and SDKs, or start with reference implementations using technologies like Vue.js or React.</p>
      </a>

      <a href="/themes.html" class="HomepageCard_item">
        <span class="HomepageCard_icon">
          <SwagIcon icon="image" type="solid" />
        </span>
        <span class="HomepageCard_heading">
          Build a theme
          <SwagIcon icon="long-arrow-right" type="solid" />
        </span>
        <p>Style your store with unparalleled flexibility using custom-built or third-party themes.</p>
      </a>

      <a href="/integrations.html" class="HomepageCard_item">
        <span class="HomepageCard_icon">
          <SwagIcon icon="puzzle-piece" type="solid" />
        </span>
        <span class="HomepageCard_heading">
          Integrations
          <SwagIcon icon="long-arrow-right" type="solid" />
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
    @apply grid gap-7 md:grid-cols-2 lg:grid-cols-3;
    @media (min-width: 960px) {
      grid-template-columns: 3fr 3fr 4fr;
    }
  }
}
</style>