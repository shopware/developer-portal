<template>
  <a :href="page">
    <img :src="image"/>
    <h3>{{ title }}</h3>
    <p>{{ sub }}</p>
  </a>
</template>

<script setup lang="ts">
const props = defineProps({
  page: {
    type: String,
    requied: true,
  },
  title: {
    type: String,
    required: true,
  },
  sub: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  }
});
</script>