import { defineConfigWithTheme } from "vitepress";
import type { Config as ThemeConfig } from "vitepress-shopware-docs";
import baseConfig from "vitepress-shopware-docs/config";
import ViteRequireContext from '@originjs/vite-plugin-require-context'
const {resolve} = require('path');

import {copyAdditionalAssets} from "./helpers";
import navigation from "./navigation";

export default defineConfigWithTheme<ThemeConfig>({
  extends: baseConfig,

  lang: "en-US",
  title: "Shopware",
  description: "Name of the documentation",
  srcDir: "src",
  // srcExclude: ["tutorial/**/description.md"], In case we need something to be excluded
  scrollOffset: "header",

  head: [],
  // tmp?
  ignoreDeadLinks: true,

  themeConfig: {
    ...navigation, // add sidebar and nav config

    // remove if edit not needed
    editLink: {
      repo: "shopware/developer-documentation-vuepress",
      text: "Edit this page on GitHub",
    },

    algolia: {
      indexName: "",
      appId: "",
      apiKey: "",
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
      })
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
