import { defineConfigWithTheme } from "vitepress";
import type { Config as ThemeConfig } from "vitepress-shopware-docs";
import baseConfig from "vitepress-shopware-docs/config";
import ViteRequireContext from '@originjs/vite-plugin-require-context'
const {resolve} = require('path');
import { MarkdownTransform } from "./plugins/markdownTransform";

import {copyAdditionalAssets, createSitemap} from "./helpers";
import navigation from "./navigation";

export default defineConfigWithTheme<ThemeConfig>({
  extends: baseConfig,

  lang: "en-US",
  title: "Shopware Documentation",
  description: "Documentation for Shopware developers",
  srcDir: "src",
  srcExclude: [],
  scrollOffset: "header",

  head: [
    // favicon
    ['link', {rel: "icon", type: "image/png", href: "/favicon.webp"}],
    ['link', {rel: "shortcut icon", href: "/favicon.webp"}],

    // Google Analytics - UA-64631238-1
    [
      'script',
      { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=UA-64631238-1' }
    ],
    [
      'script',
      {},
      "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'UA-64631238-1');"
    ]
  ],

  // tmp?
  ignoreDeadLinks: true,

  themeConfig: {
    ...navigation, // add sidebar and nav config

    // remove if edit not needed
    editLink: {
      repo: "shopware/developer-documentation-vitepress",
      text: "Edit this page on GitHub",
    },

    algolia: {
      indexName: "beta-developer-shopware",
      appId: "J1Y01X9HGM",
      apiKey: "711e1cadf66a3957aaf183a58aad12a7",
      // searchParameters: {
      //   facetFilters: ["version:v1"],
      // },
    },
  },

  vite: {
    define: {
      __VUE_OPTIONS_API__: false,
    },
    server: {
      host: true,
      fs: {
        // for when developing with locally linked theme
        allow: ["../.."],
      },
    },
    build: {
      minify: "terser",
      chunkSizeWarningLimit: Infinity,
    },
    json: {
      stringify: true,
    },
    plugins: [
      ViteRequireContext({
        projectBasePath: `${process.cwd()}/src`
      }),
      MarkdownTransform(),
    ],
  },

  vue: {
    // https://github.com/vitejs/vite/issues/7854
    reactivityTransform: resolve(__dirname, 'src'), // true
  },
  async buildEnd() {
    /**
     * Copy additional assets not present in the assets or public dir.
     */
    await copyAdditionalAssets();

    /**
     * Create public sitemap.xml.
     */
    await createSitemap();
  }
});
