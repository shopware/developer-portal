<template>
  <div class="SwagExtendShopware_card c-flat-card">
    <div class="SwagExtendShopware_heading"><slot name="title" /></div>
    <div class="leading-6"><slot name="description" /></div>
    <div class="SwagExtendShopware_availabilities mt-4 leading-6">
      <span class="SwagExtendShopware_availability" v-for="availability in availabilities">{{ availability }}</span>
    </div>
    <p><slot name="link" /></p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  availabilities: {
    type: Array,
  }
});
</script>