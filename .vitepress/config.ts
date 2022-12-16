import { defineConfigWithTheme } from "vitepress";
import type { Config as ThemeConfig } from "vitepress-shopware-docs";
import baseConfig from "vitepress-shopware-docs/config";
import ViteRequireContext from '@originjs/vite-plugin-require-context'

import {copyAdditionalAssets} from "./helpers";
import navigation from "./navigation";
import {readSidebar} from "../node_modules/vitepress-shopware-docs/src/core/composables/Sidebar";

navigation.sidebar['/resources/admin-extension-sdk/'] = readSidebar('/resources/admin-extension-sdk/', './src/resources/admin-extension-sdk/');

export default defineConfigWithTheme<ThemeConfig>({
  extends: baseConfig,

  lang: "en-US",
  title: "Shopware",
  description: "Name of the documentation",
  srcDir: "src",
  // srcExclude: ["tutorial/**/description.md"], In case we need something to be excluded
  scrollOffset: "header",

  head: [],

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
    reactivityTransform: true,
  },
  async buildEnd(){

    copyAdditionalAssets([
      'resources/meteor-icon-kit/public/icons/regular',
      'resources/meteor-icon-kit/public/icons/solid',
    ]);

  }
});
