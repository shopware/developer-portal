<template>
  <div class="SwagExtendShopware">
    <span class="h-label">Extend Shopware</span>
    <h2 class="h-homepage">Adoption made easy</h2>

    <div class="grid gap-10 md:grid-cols-3">

      <SwagCardExtend :availabilities="['SaaS', 'PaaS', 'Self-hosted']">
        <template #title>Apps</template>
        <template #description>
          <b>Apps</b> are most recommended extensions built via <b>app scripts</b>, <b>app system</b> or <b>app SDKs</b> have access to modify the Shopware's internal database schema and may or may not be deployed on the Shopware server based on the complexity of apps.
        </template>
        <template #link><a href="/docs/guides/plugins/apps/app-base-guide.html" class="btn --secondary mt-4 inline-block">Learn more about Apps</a></template>
      </SwagCardExtend>

      <SwagCardExtend :availabilities="['PaaS', 'Self-hosted']">
        <template #title>Themes</template>
        <template #description>
          Themes can be extended as apps or plugins. They gives you the ability to change your storefront's visual appearance via <b>SCSS/CSS</b> styling and adjusting <b>twig</b> templates. You can also provide JavaScript with your theme to change how the storefront behaves in the browser.
        </template>
        <template #link><a href="/docs/guides/plugins/themes/theme-base-guide.html" class="btn --secondary mt-4 inline-block">Learn more about Themes</a></template>
      </SwagCardExtend>

      <SwagCardExtend :availabilities="['PaaS', 'Self-hosted']">
        <template #title>Plugins</template>
        <template #description>
          Plugins are deep core modifications written in <b>PHP</b>. Plugins are extended via <b>plugin system</b> or <b>SDKs</b>. Plugins modify Shopware's internal database schema and are deployed on the Shopware server.
        </template>
        <template #link><a href="/docs/guides/plugins/plugins/plugin-base-guide" class="btn --secondary mt-4 inline-block">Learn more about Plugins</a></template>
      </SwagCardExtend>

    </div>
  </div>
</template>

<script setup lang="ts">
import SwagCardExtend from "./SwagCardExtend.vue";
</script>