<template>
  <div class="basis-1/3 bg-white rounded-lg border-1px border-#eeeeee rounded-md shadow-md bg-#fdfdfd hover:shadow-lg hover:border-#e8e8e8 dark:border-#444 dark:bg-#222 dark:hover:border-#333 dark:hover:bg-#212121">
    <a href="#">
      <img class="rounded-t-lg" :src="image" alt="" />
    </a>
    <div class="p-5">
      <a href="#">
        <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">{{ title }}</h5>
      </a>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-xs">{{ sub }}</p>
    </div>
  </div>
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