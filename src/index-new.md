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
</script>

<!-- HERO -->
<SwagHero>
      <template #label>Shopware for developers</template>
      <template #title>Open commerce platform, made easy.</template>
      <template #content><p>Shopware is the leading open commerce platform powered by Symfony and Vue that drives thousands of exeptional online stores and supported by a huge worldwide community of developers, agencies and merchants. Our software is developed for the people who use it.</p></template>
      <template #links>
        <a href="#" class="btn --primary --sm">Get started</a>
        <a href="#" class="btn --primary --subtle --bordered">See what's new</a>
      </template>
      <template #image><img src="/home/developers.svg" /></template>
</SwagHero>

<!-- GET TO KNOW SHOPWARE -->
<SwagGetToKnow />

<!-- START BUILDING -->
<SwagStartBuilding />

<hr />

<!-- EXTEND SHOPWARE -->
<SwagExtendShopware />

<!-- CONTRIBUTE TO SHOPWARE -->
<SwagContribute />

<!-- CHANGELOG --->
<SwagChangelogWrapper />

<!-- NEWSLETTER -->
<SwagNewsletter />