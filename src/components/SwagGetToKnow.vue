<template>
  <div class="SwagGetToKnow">
    <span class="h-label">Getting started in minutes</span>
    <h2 class="h-homepage">Get to know Shopware</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

      <SwagCard page="/docs/concepts/framework/">
        <template #title>What is Shopware?</template>
        <template #description>Learn about Shopware capabilities, framework, architecture and more.</template>
      </SwagCard>

      <SwagCard page="#Start">
        <template #title>How to start with Shopware?</template>
        <template #description>Ways you can get involved with Shopware as a developer.</template>
      </SwagCard>

      <SwagCard page="/docs/guides/installation/">
        <template #title>How to install Shopware?</template>
        <template #description>Based on your requirements and resources, setup your store.</template>
      </SwagCard>

      <SwagCard page="/docs/products/extensions/migration-assistant/">
        <template #title>How to migrate to Shopware?</template>
        <template #description>Ways to migrate to Shopware irrespective of your old instance.</template>
      </SwagCard>

    </div>
  </div>
</template>

<script setup lang="ts"></script>