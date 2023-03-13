import { defineConfigWithTheme } from "vitepress";
import type { Config as ThemeConfig } from "vitepress-shopware-docs";
import baseConfig from "vitepress-shopware-docs/config";
import ViteRequireContext from '@originjs/vite-plugin-require-context'
const {resolve} = require('path');
import { MarkdownTransform } from "./plugins/markdownTransform";
import Inspect from "vite-plugin-inspect";

import {copyAdditionalAssets, createSitemap} from "./helpers";
import navigation from "./navigation";

export default defineConfigWithTheme<ThemeConfig>({
  extends: baseConfig,

  title: "Shopware Documentation",
  description: "Documentation for Shopware developers",
  srcDir: "src",
  srcExclude: [
      "**/_source/**",
      "docs/v6.3/guides/plugins/apps/app-base-guide.md",
      "docs/v6.3/guides/plugins/plugins/administration/customizing-components.md",
      "docs/v6.3/guides/plugins/plugins/framework/flow/add-flow-builder-trigger.md",
      "docs/v6.3/guides/plugins/plugins/testing/end-to-end-testing.md",
      "docs/v6.3/products/extensions/b2b-suite/concepts/basic-conventions.md",
      "docs/v6.3/resources/references/app-reference/payment-reference.md",
  ],

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

    algolia: {
      indexName: "beta-developer-shopware",
      appId: "J1Y01X9HGM",
      apiKey: "711e1cadf66a3957aaf183a58aad12a7",
    },

    swag: {
      similarArticlesHost: 'https://ai-ml.fly.dev',
    }
  },

  vite: {
    plugins: [
      Inspect(),
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
