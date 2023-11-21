<template>
  <div class="SwagChangelogWrapper my-10 p-10 c-flat-card">
    <span class="h-label">What's new?</span>
    <h2 class="h-homepage">Stay in sync with Shopware</h2>

    <div class="SwagChangelogWrapper_grid gap-10 items-start">
      <div class="c-flat-card p-6">
        <h3 class="SwagChangelogWrapper_title">Shopware version 6.5.1.1</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis sem dui. Etiam suscipit, eros sit amet
          elementum accumsan, lorem nulla tincidunt sem, in ullamcorper libero nibh non sapien....</p>
        <ul>
          <li v-for="link in links"><a :href="`${latestRelease.link}#${link.slug}`">{{ link.title }}</a></li>
        </ul>
        <a :href="latestRelease.link">View details</a>
      </div>
      <div class="grid gap-5">
        <h3 class="SwagChangelogWrapper_title">
          Changelog
          <a href="https://github.com/shopware/platform/blob/trunk/CHANGELOG.md"
             target="_blank"
             class="SwagChangelogWrapper_link">
            View on GitHub
            <SwagIcon icon="external-link-s"/>
          </a>
        </h3>
        <SwagChangelog :releases="releases"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" async>
import {useData} from "vitepress";
import {getSidebar, flattenSidebar} from '../../node_modules/vitepress-shopware-docs/src/shopware/support/sidebar'
import SwagChangelog from "./SwagChangelog.vue";

const {theme} = useData()
const releases = flattenSidebar(getSidebar(theme.value.sidebar, '/release-notes/'))
    .filter(item => item.link?.match(/^\/release-notes\/(\d).(\d)\/(\d).(\d).(\d).(\d).html/g))
    .map(({text, link, meta}) => ({text, link, ...meta}))
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .map(release => {
      const date = new Date(release.date);
      release.date = `${date.toLocaleDateString()} ${date.toLocaleTimeString(undefined, {
        hour: '2-digit',
        minute: '2-digit'
      })}`;
      return release;
    });

const latestRelease = releases[0];
const sources = import.meta.glob(`../release-notes/*/*.*.*.*.md`);
const latestSource = sources[`..${latestRelease.link.replace('.html', '.md')}`];
const latestData = await latestSource();
const headers = latestData.__pageData.headers;
const improvements = headers.find(({title}) => title === 'Improvements')?.children || [];
const links = improvements.map(({title, slug}) => ({title, slug}));
</script>

<style lang="scss">
.SwagChangelogWrapper {
  @apply bg-[var(--sw-c-gray-50)];
  &_grid {
    @apply grid;
    @media (min-width: 768px) {
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
}
</style>