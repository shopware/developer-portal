<template>
    <ClientOnly>
        <div class="SwagRibbon">
            <SwagIcon icon="party-horn" type="solid" />
            <span v-html="text"></span>
            <SwagIcon icon="party-horn" type="solid" />
        </div>
    </ClientOnly>
</template>

<script setup>
const texts = [
    'Shopware 6.7 Release Candidate 2 – <a href="https://www.shopware.com/en/news/shopware-6-7-release-candidate-2/" target="_blank">now available</a>',
    'Checkout <span class="hidden sm:inline">our</span> new community home - <a href="https://hub.shopware.com/" target="_blank">Community Hub</a>',
];
const text = texts[Math.floor(Math.random() * texts.length)];
</script>

<style lang="scss">
.SwagRibbon {
    @apply text-xs font-medium text-center p-2 fixed left-0 right-0 top-0 bg-[--sw-c-blue-vivacious-50] dark:bg-[--sw-c-gray-dark-700] flex gap-2 items-center justify-center;
    z-index: var(--vp-z-index-nav);
    a {
        @apply underline;
    }
    .SwagIcon {
        @apply hidden sm:inline-flex text-[--sw-c-blue-vivacious-900];
    }
}

#app:has(.SwagRibbon) {
    header.VPNav {
        top: var(--vp-ribbon-height);
    }

    .VPNavScreen {
        top: calc(var(--vp-nav-height, 0px) + var(--vp-layout-top-height, 0px) + 1rem);
    }

  @media (min-width: 960px) {
    .Layout .VPContent {
      //padding-top: calc(var(--vp-nav-height) + var(--vp-ribbon-height));
    }
  }
}

</style>