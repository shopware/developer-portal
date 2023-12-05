<template>
  <div class="SwagChangelog">
    <a :href="release.link" class="SwagChangelog_item divide-y-1 divide-x-1 divide-gray-400"
       v-for="release in releases">
      <span class="SwagChangelog_version">{{ release.text }}</span>
      <span class="flex gap-1">
        <SwagLabel :label="release.label" v-if="release.label"></SwagLabel>
        <SwagLabel>{{ release.date }}</SwagLabel>
      </span>
    </a>
    <a href="/release-notes/6.5/"
       class="mt-3 as-link --with-icon SwagChangelog_older">
      Older versions
      <SwagIcon icon="long-arrow-right" type="solid"/>
    </a>
  </div>
</template>

<style lang="scss">
.SwagChangelog {
  @apply grid gap-2;
  &_item {
    @apply flex justify-between items-center gap-2;
  }

  &_version {
    @apply font-normal text-lg text-black;
    .dark & {
      @apply text-white;
    }
  }

  &_older {
    font-size: .875rem;
  }
}
</style>

<script setup lang="ts">
const props = defineProps({
  releases: {
    type: Array,
  }
})
</script>