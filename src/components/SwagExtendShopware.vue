<template>
  <div class="SwagExtendShopware my-10 py-10">
    <span class="h-label">Extend Shopware</span>
    <h2 class="text-4xl tracking-wide mb-10 isolated">Adoption made easy</h2>

    <div class="grid gap-10 md:grid-cols-3">

      <div class="SwagExtendShopware_card c-flat-card">
        <div class="SwagExtendShopware_heading">Apps</div>
        <div class="leading-6">
          <b>Apps</b> are most recommented extensions built via <b>app scripts</b>, <b>configurations</b> or <b>APIs</b> (REST, webhooks). Deployed with the Shopware server, more complex apps require an additional separate server.
        </div>
        <div class="SwagExtendShopware_availabilities mt-4 leading-6">
          <span class="SwagExtendShopware_availability">SaaS</span>
          <span class="SwagExtendShopware_availability">PaaS</span>
          <span class="SwagExtendShopware_availability">Self-hosted</span>
        </div>
        <p><a href="/apps/capabilities" class="btn --secondary mt-4 inline-block">Learn more about Apps</a></p>
      </div>

      <div class="c-flat-card">
        <div class="font-bold p-2 mb-4 rounded-md bg-gradient-to-r from-sw-purple to-sw-purple text-white text-center">Plugins</div>
        <div class="m-2 text-sm leading-6"> Deep core modifications written in <b>PHP</b>. Apply patterns like <b>dependency injection</b> and <b>event listeners</b>. Can modify Shopware's internal <b>database schema</b> using Migrations. Deployed on the Shopware server. </div>
        <div class="m-2 text-sm mt-4 leading-6"> Plugins can be installed in <b>self-hosted</b> and <b>PaaS</b> environments only. </div>
        <p><a href="/plugins/plugin-base-guide" class="btn --subtle m-2 mt-4 inline-block">Learn more about Plugins</a></p>
      </div>

      <div class="c-flat-card">
        <div class="font-bold p-2 mb-4 rounded-md bg-gradient-to-r from-sw-green to-sw-green text-white text-center">Themes</div>
        <div class="m-2 text-sm leading-6"> A theme gives you the ability to change your storefront's visual appearance via <b>SCSS/CSS</b> styling and adjusting <b>twig</b> templates. You can also provide <b>JavaScript</b> with your theme to change how the storefront behaves in the browser.</div>
        <div class="m-2 text-sm mt-4 leading-6"> Themes can be installed in <b>self-hosted</b> and <b>PaaS</b> environments only. </div>
        <p><a href="/docs/guides/plugins/themes/theme-base-guide.html" class="btn --secondary m-2 mt-4 inline-block">Learn more about Themes</a></p>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
.SwagExtendShopware {
  &_card {
    @apply p-8;
  }
  &_heading {
    @apply font-bold text-xl;
  }
  &_availabilities {
    @apply flex gap-2;
  }
  &_availability {
    @apply rounded-md border border-solid border-[var(--sw-c-gray-600)] text-xs font-bold p-2;
  }
}
</style>