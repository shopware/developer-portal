<template>
  <div class="max-w-4xl w-full">
    <div class="flex flex-col gap-4">
      <p>
        You can test Knowledge Index by sending a search query or searching for
        similar articles.
      </p>
      <div class="flex gap-5 items-center justify-between">
        <span>Collection: </span>
        <select
          v-model="collection"
          class="text-lg w-10/12 p-4 bg-slate-200 disabled:bg-slate-400 focus:outline-none rounded"
        >
          <option value="">default (full)</option>
          <option value="docs">docs</option>
          <option value="frontends">frontends</option>
          <option value="lorem">lorem ipsum</option>
        </select>
      </div>

      <div class="flex gap-5 items-center justify-between">
        <span>Search: </span>
        <input
          :disabled="similar.length"
          v-model="query"
          class="text-lg w-10/12 p-4 bg-slate-200 disabled:bg-slate-400 focus:outline-none rounded"
          type="text"
        />
      </div>
      <div class="flex gap-5 items-center justify-between">
        <span>Similar to: </span>
        <select
          :disabled="query.length"
          class="text-lg w-10/12 p-4 bg-slate-200 disabled:bg-slate-400 focus:outline-none rounded"
          v-model="similar"
        >
          <option value=""></option>
          <option v-for="item in sidebar" :key="item.link" :value="item.link">
            {{ item.link }} - {{ item.text }}
          </option>
        </select>
      </div>

      <div v-if="errorText" class="mt-5 bg-red-300 p-10 rounded leading-8 text-black">An error occured<br/>{{  errorText  }}</div>

      <div class="flex gap-5 items-center justify-center">
        <button
          :disabled="!(query.length + similar.length)"
          class="text-lg p-3 w-2/12 rounded bg-slate-100 disabled:bg-slate-400 text-slate-900"
          v-on:click.prevent="requestAnswer"
        >
          Get results
        </button>
      </div>
    </div>

    <PageRef
      v-for="result in results"
      :sub="''"
      :key="result.url"
      :title="result.title"
      :page="result.url"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useConfig } from "../../node_modules/vitepress-shopware-docs/src/shopware/composables/config.ts";

const query = ref("");
const similar = ref("");
const collection = ref("");

const pending = ref(false);
const results = ref([]);

const errorText = ref(null)

const flatten = (items = [], flattened = []) =>
  items.reduce(
    (flattened, item) => flatten(item.items || [], [item, ...flattened]),
    flattened
  );

const { config } = useConfig();
const sidebar = [
  ...flatten(config.value.sidebar["/docs/"]),
  ...flatten(config.value.sidebar["/resources/admin-extension-sdk/"]),
  ...flatten(config.value.sidebar["/resources/meteor-component-library/"]),
  ...flatten(config.value.sidebar["/apps/"]),
  ...flatten(config.value.sidebar["/themes/"]),
  ...flatten(config.value.sidebar["/frontends/"]),
];

const requestAnswer = async () => {
  errorText.value = null;
  results.value = [];

  if (!(query.value.length + similar.value.length)) {
    errorText.value = 'Please, enter search query or select a page to compare';
    return;
  }

  pending.value = true;

  const url = query.value.length
    ? "https://ai-ml.fly.dev/query"
    : "https://ai-ml.fly.dev/neighbours";
  const body = query.value.length
    ? { search: query.value }
    : { id: similar.value.replace(/\.[^/.]+$/, ".md").substring(1) };

  if (collection.value) {
    body.collection = collection.value;
  }

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    results.value = data.results.map((result) => ({
      title: result.heading,
      url: `/${result.id
        .replace(/\.[^/.]+$/, ".html")
        .replace("/index.html", "")}`,
    }));
  } catch (e) {
    errorText.value = 'Something went wrong, please try again';
    console.error(e);
  }

  pending.value = false;
};
</script>

<style>
a {
  @apply text-slate-600 underline;
}
</style>