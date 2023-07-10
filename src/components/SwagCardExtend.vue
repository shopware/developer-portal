<template>
  <div class="SwagExtendShopware_card c-flat-card">
    <div class="SwagExtendShopware_heading"><slot name="title" /></div>
    <div class="SwagExtendShopware_description leading-6"><slot name="description" /></div>
    <div class="SwagExtendShopware_availability-title">Availability</div>
    <div class="SwagExtendShopware_availabilities">
      <span class="SwagExtendShopware_availability" v-for="availability in availabilities">{{ availability }}</span>
    </div>
    <div class="SwagExtendShopware_links"><slot name="link" /></div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  availabilities: {
    type: Array,
  }
});
</script>

<style lang="scss">
.SwagExtendShopware {
  &_card {
    @apply p-8;
  }
  &_heading {
    @apply font-bold text-xl mb-3;
  }
  &_availability-title {
    @apply font-bold mt-6;
    letter-spacing: 0.0625rem;
    color: #6E6E6E;
  }
  &_availabilities {
    @apply flex gap-2 mt-2 leading-6;
  }
  &_availability {
    @apply rounded-md border border-solid border-[var(--sw-c-gray-300)] text-xs p-2;
    font-weight: 600;
    color: var(--sw-c-gray-dark-100);
  }
  &_links {
    @apply mt-4;
  }
}
</style>