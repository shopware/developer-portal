<template>
    <div class="SwagQA max-w-4xl w-full">
        <div class="flex gap-5">
            <input :disabled="pending" v-model="query" class="SwagQA_input text-lg w-10/12 p-4 focus:outline-none rounded" type="text">
            <button :disabled="pending" class="SwagQA_button text-lg w-2/12 rounded" v-on:click="requestAnswer">Ask</button>
        </div>
        <div v-if="errorText" class="mt-5 bg-red-300 p-10 rounded leading-8 text-black">An error occured<br/>{{  errorText  }}</div>
        <div class="SwagQA_answer mt-5 mb-5 p-10 rounded leading-8 text-lg"  v-if="response.answer && !pending" v-html="marked(response.answer)"></div>
        <PageRef :sub="''" page="/docs/guides/plugins/plugins/storefront/add-custom-styling" />
        <PageRef :sub="''" page="/docs/guides/plugins/themes/add-css-js-to-theme" />
        <PageRef :sub="''" page="/docs/guides/plugins/themes/theme-base-guide" />
        <div class="flex justify-center">
            <img v-if="pending" class="animate-pulse mt-10 max-h-48" src="../public/home/jellyfish.png" alt="Loading...">
        </div>
    </div>
</template>

<script setup>
import {qa} from "./ai/ml";

const {
  query,
  pending,
  response,
  errorText,
  requestAnswer,
  marked
} = qa();
</script>

<style scoped lang="scss">
a {
    @apply text-slate-600 underline;
}

.SwagQA {
    &_input {
        @apply bg-slate-200 disabled:bg-slate-400;
        @apply dark:bg-slate-800 dark:disabled:bg-slate-700;
    }
    &_button {
        @apply bg-slate-100 disabled:bg-slate-400;
        @apply dark:bg-slate-900 dark:disabled:bg-slate-600;
    }
    &_answer {
        @apply bg-slate-300 text-slate-900;
        @apply dark:bg-slate-700 dark:text-slate-100;
    }
}
</style>