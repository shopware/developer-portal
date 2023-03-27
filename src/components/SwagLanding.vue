<template>
  <div class="flex flex-col gap-10">

    <div class="flex md:flex-row gap-10 content-center">

      <div class="md:basis-4/6 gap-10 flex flex-col">
        <h1 class="accent font-black" style="font-weight: 900; font-family: 'Poppins';">{{ title }}</h1>
        <div v-html="description"></div>

        <div>
          <PageRef v-for="cta in ctas" :page="cta.page" :title="cta.title" :sub="cta.sub"/>
        </div>
      </div>

      <div class="md:basis-2/6">
        <img :src="image" />
      </div>

    </div>

    <div class="bg-light-blue-400/10 flex gap-10">
      <SwagLandingCard v-for="item in exposed" v-bind="item"/>
    </div>

  </div>
</template>

<script setup lang="ts">
import SwagLandingCard from "./SwagLandingCard.vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  ctas: {
    type: Array,
    required: false,
    default: []
  },
  exposed: {
    type: Array,
    required: false,
    default: []
  }
});
</script>