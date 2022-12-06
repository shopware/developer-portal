import { defineConfigWithTheme } from "vitepress";
import type { Config as ThemeConfig } from "vitepress-shopware-docs";
import baseConfig from "vitepress-shopware-docs/config";
//import {readSidebar} from "vitepress-shopware-docs/src/core/composables/Sidebar";

// /www/developer-portal/node_modules/
//import {readSidebar} from "vitepress-shopware-docs/src/core/composables/Sidebar";
//import {readSidebar} from "vitepress-shopware-docs/src/core/composables/Sidebar2";
//import {readSidebar} from "vitepress-shopware-docs/sidebarJs";
//import {readSidebar} from "vitepress-shopware-docs/src/core/composables/Sidebar";
//import sidebarModule from "vitepress-shopware-docs/sidebar";
//import sidebarModule from "vitepress-shopware-docs/sidebarTs";
//const {readSidebar} = sidebarModule;
//import {readSidebar} from "vitepress-shopware-docs/sidebar";
//import {readSidebar} from "vitepress-shopware-docs/src/core/composables/sidebar";
//import core from "vitepress-shopware-docs/core";
//console.log(core);
import {readSidebar} from "../Sidebar";

const sidebar = {
  '/apps/': readSidebar('apps', './src/apps/'),
  '/apps2/': [
    {
      text: 'Test',
      items: []
    }
  ]
};

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
    sidebar,

    // remove if edit not needed
    editLink: {
      repo: "shopware/developer-documentation-vuepress",
      text: "Edit this page on GitHub",
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
  },

  vue: {
    reactivityTransform: true,
  },
});
