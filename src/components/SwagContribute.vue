<template>
  <div class="SwagContribute c-flat-card my-10 grid">
    <div class="p-10">
      <span class="h-label">Contribute to Shopware</span>
      <h2 class="text-4xl tracking-wide mb-10 isolated">Our philosophy, your opportunity.</h2>
      <p>Open source is the most honest, transparent, and secure way to develop software. Together with our global
        community we’re creating the heart and soul of our ecommerce software.</p>
      <div class="flex gap-4">
        <a href="#" class="btn">Contribute on GitHub</a>
        <a href="#" class="btn --subtle">Download</a>
      </div>
    </div>

    <img src="/home/build-contribute.svg"/>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
.SwagContribute {
  @media (min-width: 768px) {
    grid-template-columns: 40% 60%;
  }
}
</style>