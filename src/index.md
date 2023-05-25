---
sidebar: false
aside: false
page: true
footer: false
editLink: false
stackOverflowLink: false
prev: false
next: false
---

<div class="unstyled w-full md:max-w-1376px 2xl:px-0 mx-auto">

<!--<div class="flex items-end place-content-center gap-4 opacity-50 my-6">
  <img src="/home/arrow.png" class="max-h-[6rem]" />
  <img src="/home/search.png" class="max-h-[2rem]"/>
</div>-->

<div class="my-12 md:my-24">
  <h1 class="text-center accent text-3xl md:text-5xl font-black mb-8" style="font-family: 'Poppins';">Shopware Developer Documentation</h1>
  <p class="mx-auto text-center text-gray-600 dark:text-slate-200 max-w-800px mx-auto text-lg leading-8" style="font-family: 'Inter';">
      Shopware is an <b>open-source ecommerce platform</b> that helps merchants <b>build</b> their online stores. You, as a <b>developer</b>, can contribute by <b>creating</b> extensions, themes, or integrations and <b>selling</b> it in our store.
  </p>
</div>

<!--<div class="flex items-start place-content-center gap-4 opacity-50 my-6">
  <img src="/home/try.png" class="max-h-[2rem]"/>
  <img src="/home/arrow.png" class="rotate-180 max-h-[6rem]" />
</div>

<div class="flex items-center place-content-center mb-12">
  <SwagQA />
  <SwagBazaar />
</div>

<script setup>
  import SwagQA from './components/SwagQA.vue'
  import SwagBazaar from './components/SwagBazaar.vue'
</script>-->

<!-- import {VTIconSlack, VTIconTwitter, VTIconGitHub, VTIconStackoverflow} from 'vitepress-shopware-docs'; -->

<h2 class="text-4xl tracking-wide mb-10 accent isolated">Get to know Shopware</h2>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">

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
    <template #title>Want to migrate to Shopware?</template>
    <template #description>Lean how easy it is to migrate to Shopware irrespective of your old instance.</template>
  </SwagCard>

</div>

<h2 class="text-4xl tracking-wide mb-10 accent isolated">Start building</h2>

<div class="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">

  <SwagCard page="/apps/">
    <template #title>Apps</template>
    <template #description>Boost or expand your store's capabilities with the simplicity of apps, a must-have for developers seeking to elevate their digital marketplace.</template>
  </SwagCard>

  <SwagCard page="/themes/">
    <template #title>Themes</template>
    <template #description>Style your store with unparalleled flexibility using custom-built or third-party themes, giving you a competitive advantage in this world of ecommerce.</template>
  </SwagCard>

  <SwagCard page="https://frontends.shopware.com/">
    <template #title>Frontends</template>
    <template #description>Build unique and captivating custom storefronts using Store APIs and SDKs, or start with reference implementations using technologies like Vue.js or React.</template>
  </SwagCard>

  <SwagCard page="/integrations/">
    <template #title>Integrations</template>
    <template #description>Integrate with third-party systems through Shopware's powerful APIs that enable swift transfer of products, orders, and other data. </template>
  </SwagCard>

</div>

<h2 class="text-4xl tracking-wide mb-10 accent isolated">Looking for old documentation?</h2>

<div>
  <SwagCard page="/docs/">
    <template #title>Developer docs</template>
    <template #description> Visit our old documentation here for references</template>
  </SwagCard>
</div>

<!--<div class="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
    <div>
        <h2 class="text-4xl tracking-wide mb-10 accent isolated">Looking for help</h2>
        <div class="flex">
            <a href="#">
                <VTIconSlack />
            </a>
            <a href="#">
                <VTIconTwitter />
            </a>
            <a href="#">
                <VTIconGitHub />
            </a>
            <a href="#">
                <VTIconStackoverflow />
            </a>
        </div>
    </div>
    <div>
        <h2 class="text-4xl tracking-wide mb-10 accent isolated">Leave feedback</h2>
        <ul>
            <li><a href="#">Contribute to the documentation</a></li>
            <li><a href="#">Make a pull request</a></li>
            <li><a href="#">Share feedback on Slack</a></li>
        </ul>
    </div>
</div>-->

</div>
