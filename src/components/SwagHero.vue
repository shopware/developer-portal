<template>
  <div class="SwagHero SwagHero--developer">
    <div class="grid gap-6 md:grid-cols-2">
      <div class="grid gap-2">
        <div class="SwagHero_label h-label"><slot name="label">Label</slot></div>
        <div class="SwagHero_title"><slot name="title">Title</slot></div>
        <div class="SwagHero_content"><slot name="content">Content</slot></div>
      </div>
      <div>
        <div class="SwagHero_image"><slot name="image">Image</slot></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
.SwagHero {
  &_label {
  }
  &_title {
    font-weight: 800;
    font-size: 3rem;
    line-height: 1em;
  }
  &_content {

  }
  &_image {

  }
}
</style>