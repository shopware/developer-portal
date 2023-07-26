---
sidebar: false
aside: false
page: true
#footer: false
editLink: false
stackOverflowLink: false
prev: false
next: false
items:
  - text: What is Shopware
    link: /what-is-shopware.html
  - text: How to start with Shopware
    link: https://docs.shopware.com/en/shopware-6-en/getting-started
  - text: How to install Shopware
    link: /docs/guides/installation/
  - text: Migrating to Shopware
    link: /migrate-to-shopware.html
---

<script setup>
import SwagHero from "./components/SwagHero.vue";
import SwagGetToKnow from "./components/SwagGetToKnow.vue";
import SwagStartBuilding from "./components/SwagStartBuilding.vue";
import SwagExtendShopware from "./components/SwagExtendShopware.vue";
import SwagContribute from "./components/SwagContribute.vue";
import SwagChangelogWrapper from "./components/SwagChangelogWrapper.vue";
import SwagNewsletter from "./components/SwagNewsletter.vue";

import SwagBtn from "./components/SwagBtn.vue";
</script>

<!-- HERO -->
<SwagHero class="py-24">
      <template #label>Shopware for developers</template>
      <template #title>Open commerce platform, made easy.</template>
      <template #content><p>Shopware, the leading open commerce platform powered by Symfony and Vue, drives exceptional online stores and thrives with a global community of developers, agencies, and merchants. Our comprehensive documentation empowers your journey with step-by-step guidance, making everything smoother. Documentation at your service!</p></template>
      <template #links>
        <SwagBtn href="#GetToKnow" class="--primary --sm" icon="long-arrow-right" icon-at="end">Get started</SwagBtn>
        <SwagBtn href="/docs/" class="--primary --subtle --with-border --sm --transparent">View developer docs</SwagBtn>
      </template>
      <template #image><img src="/home/developers.svg" /></template>
</SwagHero>

<!-- GET TO KNOW SHOPWARE -->
<SwagGetToKnow id="GetToKnow" class="my-20" />

<!-- START BUILDING -->
<SwagStartBuilding class="my-20" />

<hr class="my-20" />

<!-- EXTEND SHOPWARE -->
<SwagExtendShopware id="Extend" class="my-20" />

<!-- CONTRIBUTE TO SHOPWARE -->
<SwagContribute class="my-20" />

<!-- CHANGELOG --->
<SwagChangelogWrapper id="Changelog" class="my-20" />

<!-- NEWSLETTER -->
<SwagNewsletter />