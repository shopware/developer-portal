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
import SwagChangelog from "./components/SwagChangelog.vue";
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
<div class="py-10 my-10 grid lg:grid-cols-2 xl:grid-cols-3 gap-10 items-start">
    <div class="c-border-gradient rounded-md">
        <div class="grid gap-4 rounded-md p-5 --apply-bg">
            <h3 class="flex justify-between items-center">Changelog <a href="#" class="text-xs">View on GitHub</a></h3>
            <SwagChangelog />
        </div>
    </div>
    <div class="lg:col-span-2 grid gap-5">
      <PageRef page="/docs/" title="Developer docs" sub="Know the technology behind Shopware, its features and how it can be extended." />
      <PageRef page="https://docs.shopware.com/" title="User docs" sub="Know how to setup and configure your shop." />
      <PageRef page="https://brand.shopware.com/" title="Design docs" sub="Know the design principles of Shopware and get access to icons, components, tokens." />
    </div>
</div>

<!-- NEWSLETTER -->
<SwagNewsletter />