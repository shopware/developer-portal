<template>
  <div class="SwagStartBuilding">
    <span class="h-label">Start building</span>
    <h2 class="h-homepage">Build the extraordinary</h2>

    <div class="SwagStartBuilding_grid">

      <a href="#" class="SwagStartBuilding_item row-span-2">
        <img src="/home/build-apps.svg" class="w-full SwagStartBuilding_image-ratio" />
        <span class="SwagStartBuilding_icon -mt-2">
          <SwagIcon icon="plug" type="solid" />
        </span>
        <span class="SwagStartBuilding_heading">
          Build an app
          <SwagIcon icon="long-arrow-right" type="solid" />
        </span>
        <p>Boost or expand your store's capabilities with the simplicity of apps, a must-have for developers seeking to elevate their digital marketplace.</p>
      </a>

      <a href="#" class="SwagStartBuilding_item row-span-2">
        <div class="SwagStartBuilding_image-wrapper">
          <img src="/home/build-frontends.svg" class="w-full SwagStartBuilding_image-ratio u-gradient-image" />
        </div>
        <span class="SwagStartBuilding_icon -mt-2">
          <SwagIcon icon="storefront" type="solid" />
        </span>
        <span class="SwagStartBuilding_heading">
          Build custom frontends
          <SwagIcon icon="long-arrow-right" type="solid" />
        </span>
        <p>Build unique and captivating custom storefronts using Store APIs and SDKs, or start with reference implementations using technologies like Vue.js or React.</p>
      </a>

      <a href="#" class="SwagStartBuilding_item">
        <span class="SwagStartBuilding_icon">
          <SwagIcon icon="image" type="solid" />
        </span>
        <span class="SwagStartBuilding_heading">
          Build a theme
          <SwagIcon icon="long-arrow-right" type="solid" />
        </span>
        <p>Style your store with unparalleled flexibility using custom-built or third-party themes.</p>
      </a>

      <a href="#" class="SwagStartBuilding_item">
        <span class="SwagStartBuilding_icon">
          <SwagIcon icon="puzzle-piece" type="solid" />
        </span>
        <span class="SwagStartBuilding_heading">
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

  &_item {
    @apply rounded-md p-8 border border-solid border-[var(--sw-c-blue-dark-100)] bg-[var(--sw-c-blue-dark-50)];
    @apply hover:border-[var(--sw-c-blue-dark-200)] hover:bg-[var(--sw-c-blue-dark-100)];

    .dark & {
      @apply border-[var(--sw-c-gray-dark-700)] bg-[var(--sw-c-gray-dark-600)];
      @apply hover:border-[var(--sw-c-gray-dark-600)] hover:bg-[var(--sw-c-gray-dark-500)];
    }
  }

  &_image-wrapper {
    margin-right: calc(-2.25rem + 1px);
  }

  &_image-ratio {
    /*aspect-ratio: 4/3;*/
    height: 230px;
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
    @apply flex gap-2 mt-4 items-center;
    color: var(--neutrals-darkgray-900, #0A0D0F);
    font-size: 1.25rem;
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    line-height: 2.625rem;

    .dark & {
      color: var(--sw-c-gray-200);
    }

    .SwagIcon {
      width: 1rem;
      height: 1rem;
    }
  }

  p {
    margin: 0;
    color: var(--c-text);
    font-weight: 400;
  }
}
</style>