<template>
  <div class="SwagChangelogWrapper my-10 p-10 c-flat-card">
    <span class="h-label">What's new?</span>
    <h2 class="h-homepage">Stay in sync with Shopware</h2>

    <div class="SwagChangelogWrapper_grid gap-10 items-start">
      <div class="c-flat-card p-6">
        <div class="relative">
          <h3 class="SwagChangelogWrapper_title">
            {{ latestSource.__pageData.title }}
            <SwagLabel>{{ latestRelease.date }}</SwagLabel>
          </h3>
          <p v-html="intro"></p>
          <ul class="SwagChangelogWrapper_links">
            <li v-for="link in links.slice(0, 5)">
              <a :href="`${latestRelease.link}#${link.slug}`" class="as-link --with-icon">
                {{ link.title }}
                <SwagIcon icon="long-arrow-right" type="solid" />
              </a>
            </li>
          </ul>
          <a :href="latestRelease.link" class="SwagChangelogWrapper_details as-link">View details</a>
        </div>
      </div>
      <div class="grid gap-5">
        <h4 class="SwagChangelogWrapper_title">
          Changelog
          <a href="https://github.com/shopware/shopware/releases"
             target="_blank"
             class="SwagChangelogWrapper_link as-link">
            View on GitHub
            <SwagIcon icon="external-link-s"/>
          </a>
        </h4>
        <SwagChangelog :releases="releases"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" async>
import {useData} from "vitepress";
import {getSidebar, flattenSidebar} from '../../node_modules/vitepress-shopware-docs/src/shopware/support/sidebar'
import SwagChangelog from "./SwagChangelog.vue";

import { createSSRApp } from 'vue';
import { renderToString } from '@vue/server-renderer';

const {theme} = useData()
const releases = flattenSidebar(getSidebar(theme.value.sidebar, '/release-notes/'))
    .filter(item => item.link?.match(/^\/release-notes\/(\d).(\d)\/(\d).(\d).(\d){1,2}.(\d){1,2}.html/g))
    .map(({text, link, meta}) => ({text, link, ...meta}))
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .map(release => {
      const date = new Date(release.date);
      release.date = date.getDate()  + "." + (date.getMonth()+1) + "." + date.getFullYear();
      release.text = release.text.startsWith('v') ? release.text.substring(1) : release.text;
      return release;
    });

const latestRelease = releases[0];
const md = `${latestRelease.link.replace('.html', '')}`;
const [empty, rn, major, patch] = md.split('/');

// https://github.com/rollup/plugins/tree/master/packages/dynamic-import-vars#limitations
//const latestSource = await import(`../release-notes/${major}/${patch}.md`);
const latestSource = await import(`../release-notes/latest.md`);

const headers = latestSource.__pageData.headers;
let improvements = headers.find(({title}) => title === 'Improvements')?.children || [];
if (!improvements.length) {
  improvements = headers;
}
const links = improvements.map(({title, slug}) => ({title, slug}));

const app = createSSRApp(latestSource.default);
const renderedHtml = await renderToString(app);

const intro = ((renderedHtml || '').split('<p>')[1] || '').split('</p>')[0];

// const content = latestSource.default.render().children[0].children;
// const intro = new DOMParser().parseFromString(content, "text/html").querySelector('p').innerText;
</script>

<style lang="scss">
.SwagChangelogWrapper {
  &.SwagChangelogWrapper {
    @apply bg-[var(--sw-c-gray-50)];
    .dark & {
      @apply bg-[var(--sw-c-gray-dark-700)];
    }
  }

  &_grid {
    @apply grid;
    @media (min-width: 960px) {
      grid-template-columns: 2fr 1fr;
    }
  }

  &_title {
    @apply flex justify-between items-center;
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.5rem;
    letter-spacing: 0.005rem;
  }

  &_link {
    @apply flex items-center;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
    letter-spacing: 0.01094rem;
    text-decoration-line: underline;

    .SwagIcon {
      height: .625rem;
    }
  }

  .SwagChangelogWrapper_links {
    @apply m-0 p-0;
    line-height: 150%;
    list-style: none;
    font-size: 0.875rem;
  }

  &_details {
    @apply absolute right-0 bottom-0;
    font-size: 0.875rem;
    text-decoration: underline;
  }
}
</style>