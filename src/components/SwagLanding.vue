<template>
  <div class="flex flex-col gap-10">

    <div class="flex md:flex-row gap-10 content-center">

      <div class="md:basis-4/6 gap-10 flex flex-col">
        <h1 class="accent font-black">{{ title }}</h1>

        <slot name="description" v-if="!description"></slot>
        <div v-html="description" v-else></div>

        <div>
          <PageRef v-for="cta in ctas" :page="cta.page" :title="cta.title" :sub="cta.sub"/>
        </div>
      </div>

      <div class="md:basis-2/6">
        <img :src="image"/>
      </div>

    </div>

    <div class="SwagLandingCardListWrapper relative">
      <h3>Starter guides</h3>
      <p>The amount of topics to start with can be overwhelming. For that reason we have prepared a handful of step-by-step tutorials to follow along that make you familiar with some of our concepts:</p>
      <div class="flex gap-10 SwagLandingCardList pt-5 pb-10">
        <SwagLandingCard v-for="item in exposed" v-bind="item"/>
      </div>
    </div>

  </div>
</template>

<style lang="scss" scoped>
h1 {
  margin-bottom: 0;
  font-weight: 900;
  font-family: 'Poppins';
}

.SwagLandingCardListWrapper {
  isolation: isolate;

  &::before {
    z-index: -1;
    position: absolute;
    top: 0;
    bottom: 0;
    left: -100%;
    right: -100%;
    content: '';
    display: block;
    background-color: var(--sw-sidebar-bg);
  }
}
</style>

<script setup lang="ts">
import SwagLandingCard from "./SwagLandingCard.vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
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