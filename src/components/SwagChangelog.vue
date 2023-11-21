<template>
  <div class="SwagChangelog divide-y-1 divide-x-1 divide-gray-400">
    <div class="SwagChangelog_item divide-y-1 divide-x-1 divide-gray-400"
         v-for="log in releases">
      <span class="SwagChangelog_version">{{ log.text }}</span>
      <div>
        <span class="SwagChangelog_label"
              :class="`--type-${log.type}`"
              v-if="log.label">{{ log.label }}</span>
        <span class="SwagChangelog_date">{{ log.date }}</span>
      </div>
    </div>
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
  &_date {
    @apply rounded-sm text-xs px-2 py-1;
    background-color: var(--sw-c-gray-100);
    color: var(--sw-c-gray-dark-100);
    .dark & {
      background-color: var(--sw-c-gray-dark-600);
      color: var(--sw-c-gray-600);
    }
  }
  &_label {
    @apply text-xs px-2 py-1;
    &.--type-rc {
      background-color: var(--sw-c-blue-vivacious-100);
      color: var(--sw-c-blue-vivacious-900);
      .dark & {
        background-color: var(--sw-c-blue-vivacious-900);
        color: var(--sw-c-blue-vivacious-50);
      }
    }
    &.--type-security {
      background-color: var(--sw-c-pink-100);
      color: var(--sw-c-pink-900);
      .dark & {
        background-color: var(--sw-c-pink-900);
        color: var(--sw-c-pink-50);
      }
    }
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