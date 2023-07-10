<template>
  <div class="SwagGetToKnow">
    <span class="h-label">Getting started in minutes</span>
    <h2 class="h-homepage">Get to know Shopware</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

      <SwagCard page="/what-is-shopware.html">
        <template #title>What is Shopware?</template>
        <template #description>Learn about Shopware, its features, benefits.</template>
      </SwagCard>

      <SwagCard page="https://docs.shopware.com/en/shopware-6-en/getting-started">
        <template #title>How to start with Shopware?</template>
        <template #description>Get to know which ways you can get involved with Shopware as a developer.</template>
      </SwagCard>

      <SwagCard page="/docs/guides/installation/">
        <template #title>How to install Shopware?</template>
        <template #description>Set up Shopware on your local machine or use a developer sandbox from the cloud.</template>
      </SwagCard>

      <SwagCard page="/migrate-to-shopware.html">
        <template #title>How to migrate to Shopware?</template>
        <template #description>Learn easy ways to migrate to Shopware irrespective of your old instance.</template>
      </SwagCard>

    </div>
  </div>
</template>

<script setup lang="ts"></script>