import { defineConfigWithTheme } from "vitepress";
import type { Config as ThemeConfig } from "vitepress-shopware-docs";
import baseConfig from "vitepress-shopware-docs/config";
import ViteRequireContext from '@originjs/vite-plugin-require-context'
const {resolve} = require('path');

import {copyAdditionalAssets} from "./helpers";
import navigation from "./navigation";

const srcExclude = [
  "docs/guides/plugins/apps/app-base-guide.md", // {% api-method %}
  "docs/resources/references/app-reference/payment-reference.md", // {% api-method %}
  "docs/resources/references/app-reference/script-reference/cart-manipulation-script-services-reference.md",
  "docs/resources/references/app-reference/script-reference/custom-endpoint-script-services-reference.md",
  "docs/resources/references/app-reference/script-reference/data-loading-script-services-reference.md",
  "docs/resources/references/app-reference/script-reference/miscellaneous-script-services-reference.md",
];

export default defineConfigWithTheme<ThemeConfig>({
  extends: baseConfig,

  lang: "en-US",
  title: "Shopware",
  description: "Name of the documentation",
  srcDir: "src",
  srcExclude,
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
      indexName: "dev_shopware_docs",
      appId: "BZSKX72NEG",
      apiKey: "51af8af7f609453a7fdf160ea0df3b2f",
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
    ],
  },

  vue: {
    // https://github.com/vitejs/vite/issues/7854
    reactivityTransform: resolve(__dirname, 'src'), // true
  },
  async buildEnd(){

    copyAdditionalAssets([
      // added to meteor-icon-kit/.github/scripts/docs.yml
      'resources/meteor-icon-kit/public/icons/regular',
      'resources/meteor-icon-kit/public/icons/solid',
      // added to admin-extension-sdk/.github/scripts/docs.yml
      'resources/admin-extension-sdk/api-reference/assets',
      'resources/admin-extension-sdk/api-reference/ui/assets',
      'resources/admin-extension-sdk/concepts/assets',
      'resources/admin-extension-sdk/getting-started/assets',
      'resources/admin-extension-sdk/internals/assets',
      'resources/admin-extension-sdk/tooling/assets',
    ]);

  }
});
