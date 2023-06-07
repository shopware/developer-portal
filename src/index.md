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

<div class="unstyled w-full md:max-w-1376px 2xl:px-0 mx-auto">

<div class="my-12 md:my-24">
  <h1 class="text-center accent text-3xl md:text-5xl font-black mb-8 grid font-poppins">Shopware Developer Documentation</h1>
  <p class="mx-auto text-center max-w-800px mx-auto text-lg leading-8">
      Shopware is an <b>open-source ecommerce platform</b> that helps merchants <b>build</b> their online stores. You, as a <b>developer</b>, can contribute by <b>creating</b> extensions, themes, or integrations and <b>selling</b> it in our store.
  </p>
</div>

<div class="c-outflow py-20">
<h2 class="text-4xl tracking-wide mb-10 accent isolated">Get to know Shopware</h2>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

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
</div>

<div class="my-10 py-10">
<h2 class="text-4xl tracking-wide mb-10 accent isolated">Start building</h2>

<div class="grid grid-cols-1 md:grid-cols-2 gap-10">

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
</div>

<h2 class="text-4xl tracking-wide mb-10 accent isolated">Extend Shopware</h2>
<div class="grid my-10 p-10 my-10 c-exposed">
    <div class="grid gap-10 md:grid-cols-3 divide-x divide-gray-300">
        <div>
        <div class="font-bold p-2 mb-4 rounded-md bg-gradient-to-r from-blue-500 to-blue-700 text-white text-center">Apps</div>
        <div class="m-2 text-sm leading-6">
        <b>Shallow</b> core modifications and extension via <b>app scripts</b>, <b>configurations</b> or <b>APIs</b> (REST, webhooks). Deployed with the Shopware server, more complex apps require an additional separate server. </div>
        <div class="m-2 text-sm mt-4 leading-6"> Apps can be installed in <b>self-hosted</b>, <b>PaaS</b> and <b>cloud</b> environments. </div>
        <p><a href="/apps/capabilities" class="btn m-2 mt-4 inline-block">Learn more about Apps</a></p>
        </div>
        <div>
        <div class="font-bold p-2 mb-4 rounded-md bg-gradient-to-r from-purple-500 to-purple-700 text-white text-center">Plugins</div>
        <div class="m-2 text-sm leading-6"> Deep core modifications written in <b>PHP</b>. Apply patterns like <b>dependency injection</b> and <b>event listeners</b>. Can modify Shopware's internal <b>database schema</b> using Migrations. Deployed on the Shopware server. </div>
        <div class="m-2 text-sm mt-4 leading-6"> Plugins can be installed in <b>self-hosted</b> and <b>PaaS</b> environments only. </div>
        <p><a href="/plugins/plugin-base-guide" class="btn --subtle m-2 mt-4 inline-block">Learn more about Plugins</a></p>
        </div>
        <div>
        <div class="font-bold p-2 mb-4 rounded-md bg-gradient-to-r from-orange-500 to-orange-700 text-white text-center">Themes</div>
        <div class="m-2 text-sm leading-6"> A theme gives you the ability to change your storefront's visual appearance via <b>SCSS/CSS</b> styling and adjusting <b>twig</b> templates. You can also provide <b>JavaScript</b> with your theme to change how the storefront behaves in the browser.</div>
        <div class="m-2 text-sm mt-4 leading-6"> Themes can be installed in <b>self-hosted</b> and <b>PaaS</b> environments only. </div>
        <p><a href="/docs/guides/plugins/themes/theme-base-guide.html" class="btn --secondary m-2 mt-4 inline-block">Learn more about Themes</a></p>
        </div>
    </div>
</div>

<!--<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
  <SwagCard page="/docs/">
    <template #title>Developer docs</template>
    <template #description> Visit our old documentation here for references</template>
  </SwagCard>
  <SwagCard page="https://docs.shopware.com/">
    <template #title>Shopware for users</template>
    <template #description> Successfully launch your online business – Learn how to use Shopware 6 in the documentation.</template>
  </SwagCard>
  <SwagCard page="https://brand.shopware.com/">
    <template #title>shopware.design</template>
    <template #description> Everything you need to know about our corporate identity and how we express our values.</template>
  </SwagCard>
</div>-->

<script setup>
import SwagChangelog from "./components/SwagChangelog.vue";
import SwagNewsletter from "./components/SwagNewsletter.vue";
</script>

<div class="py-10 my-10 grid lg:grid-cols-2 xl:grid-cols-3 gap-10 items-start">
    <div class="c-border-gradient rounded-md">
        <div class="grid gap-4 rounded-md p-5 --apply-bg">
            <h3 class="flex justify-between items-center">Changelog <a href="#" class="text-xs">View on GitHub</a></h3>
            <SwagChangelog />
        </div>
    </div>
    <div class="lg:col-span-2 grid gap-5">
      <PageRef page="/docs/" title="Developer docs" sub="Visit our old documentation here for references" />
      <PageRef page="https://docs.shopware.com/" title="Shopware for users" sub="Successfully launch your online business – Learn how to use Shopware 6 in the documentation." />
      <PageRef page="https://brand.shopware.com/" title="shopware.design" sub="Everything you need to know about our corporate identity and how we express our values." />
    </div>
</div>

<SwagNewsletter />

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
