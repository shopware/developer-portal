<template>
  <div class="SwagContribute c-flat-card grid">
    <div class="p-8 md:p-20">
      <span class="h-label">Contribute to Shopware</span>
      <h2 class="h-homepage">Our philosophy, your opportunity.</h2>
      <p>Open source is the most honest, transparent, and secure way to develop software. Together with our global
        community we’re creating the heart and soul of our ecommerce software.</p>
      <div class="mt-6 flex gap-4 items-center">
        <SwagBtn href="https://github.com/shopware" target="_blank" class="--primary --compact --sm" icon="long-arrow-right">Contribute on GitHub</SwagBtn>
        <a href="https://www.shopware.com/en/download/" target="_blank" class="btn --subtle --compact --with-border --transparent --sm">Download</a>
      </div>
    </div>

    <img src="/home/build-contribute.svg" class="self-end" />
  </div>
</template>

<script setup lang="ts">
import SwagBtn from "./SwagBtn.vue";
</script>

<style lang="scss">
.SwagContribute {
  @media (min-width: 768px) {
    grid-template-columns: 3fr 4fr;
  }
}
</style>