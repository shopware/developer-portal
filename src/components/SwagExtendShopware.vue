<template>
  <div class="SwagExtendShopware">
    <span class="h-label">Extend Shopware</span>
    <h2 class="h-homepage">Adoption made easy</h2>

    <div class="grid gap-10 md:grid-cols-3">

      <SwagCardExtend :availabilities="['SaaS', 'PaaS', 'Self-hosted']">
        <template #title>Apps</template>
        <template #description>
          <b>Apps</b> are most recommented extensions built via <b>app scripts</b>, <b>configurations</b> or <b>APIs</b>
          (REST, webhooks). Deployed with the Shopware server, more complex apps require an additional separate server.
        </template>
        <template #link><a href="/apps/capabilities" class="btn --secondary mt-4 inline-block">Learn more about Apps</a></template>
      </SwagCardExtend>

      <SwagCardExtend :availabilities="['PaaS', 'Self-hosted']">
        <template #title>Themes</template>
        <template #description>
          A theme gives you the ability to change a storefront's visual appearance via <b>SCSS/CSS</b> styling and
          adjusting <b>twig</b> templates. You can also provide <b>JavaScript</b> with your theme to change how the
          storefront behaves.
        </template>
        <template #link><a href="/docs/guides/plugins/themes/theme-base-guide.html" class="btn --secondary mt-4 inline-block">Learn more about Themes</a></template>
      </SwagCardExtend>

      <SwagCardExtend :availabilities="['PaaS', 'Self-hosted']">
        <template #title>Plugins</template>
        <template #description>
          Deep core modifications written in <b>PHP</b>. Apply patterns like <b>dependency injection</b> and
          <b>event listeners</b>. Can modify Shopware's internal <b>database schema</b> using Migrations. Deployed on
          the Shopware server.
        </template>
        <template #link><a href="/plugins/plugin-base-guide" class="btn --secondary mt-4 inline-block">Learn more about Plugins</a></template>
      </SwagCardExtend>

    </div>
  </div>
</template>

<script setup lang="ts">
import SwagCardExtend from "./SwagCardExtend.vue";
</script>