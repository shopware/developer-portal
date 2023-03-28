import { defineConfigWithTheme } from "vitepress";
import type { Config as ThemeConfig } from "vitepress-shopware-docs";
import baseConfig from "vitepress-shopware-docs/config";
import ViteRequireContext from '@originjs/vite-plugin-require-context'
const {resolve} = require('path');
import { MarkdownTransform } from "./plugins/markdownTransform";
import Inspect from "vite-plugin-inspect";

import {copyAdditionalAssets, createSitemap} from "./helpers";
import {generateMarkdownFromStoplight, getStoplightUrls} from "./helpers/stoplight";
import navigation from "./navigation";

export default defineConfigWithTheme<ThemeConfig>({
  extends: baseConfig,

  title: "Shopware Documentation",
  description: "Documentation for Shopware developers",
  srcDir: "src",
  srcExclude: [
      "**/_source/**",
      // {% api
      "docs/v6.3/guides/plugins/apps/app-base-guide.md",
      "docs/v6.3/resources/references/app-reference/payment-reference.md",
      // Missed semicolon
      'docs/v6.3/guides/plugins/plugins/plugin-fundamentals/add-custom-commands.md',
      // path() is not a function in twig codeblock
      'docs/v6.3/products/extensions/b2b-suite/guides/storefront/ajax-panel.md',
      // {% block
      'docs/v6.3/guides/plugins/plugins/administration/customizing-components.md',
  ],

  rewrites: {
    'landing/apps.md': 'docs/guides/plugins/apps/index.md',
  },

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

    // @ts-ignore
    swag: {
      similarArticlesHost: 'https://ai-ml.fly.dev',
      similarArticlesFilter: {
        'default': {
          exclude: [
            'docs/v6.4/',
            'docs/v6.3/',
          ],
        },
        '/docs/': {
          exclude: [
            'docs/v6.4/',
            'docs/v6.3/',
          ],
        },
        '/docs/v6.4/': {
          exclude: [
            'docs/',
            'docs/v6.3/',
          ],
          include: [
            'docs/v6.4/',
          ]
        },
        '/docs/v6.3/': {
          exclude: [
            'docs/',
            'docs/v6.4/',
          ],
          include: [
            'docs/v6.3/',
          ]
        }
      },
      versionSwitcher: {
        paths: [
          {
            'docs': 'Latest (v6.5)',
            'docs/v6.4': 'v6.4',
            'docs/v6.3': 'v6.3',
          }
        ]
      }
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
     * Fetch Stoplight URLs.
     */
    const stoplightUrls = [
      ...await getStoplightUrls({
        source: 'https://shopware.stoplight.io/api/v1/projects/cHJqOjEwNjA0NQ/table-of-contents',
        prefix: '/resources/api/store-api-reference.html#/',
      }),
      ...await getStoplightUrls({
        source: 'https://shopware.stoplight.io/api/v1/projects/cHJqOjEwNjA0Mw/table-of-contents',
        prefix: '/resources/api/admin-api-reference.html#/',
      }),
    ];

    /**
     * Create public sitemap.xml.
     */
    await createSitemap(stoplightUrls);

    /**
     * Transform Store API JSON reference to Markdown for Knowledge base.
     */
    await generateMarkdownFromStoplight({
      source: 'https://shopware.stoplight.io/api/v1/projects/cHJqOjEwNjA0NQ/table-of-contents',
      nodes: 'https://shopware.stoplight.io/api/v1/workspaces/d2s6MzM5MTQ/nodes?project_ids[0]=cHJqOjEwNjA0NQ',
      reference: 'https://raw.githubusercontent.com/shopware/store-api-reference/main/storeapi.json',
      as: 'resources/api/admin-api-reference.html',
    });

    /**
     * Transform Admin API JSON reference to Markdown for Knowledge base.
     */
    await generateMarkdownFromStoplight({
      source: 'https://shopware.stoplight.io/api/v1/projects/cHJqOjEwNjA0Mw/table-of-contents',
      nodes: 'https://shopware.stoplight.io/api/v1/workspaces/d2s6MzM5MTQ/nodes?project_ids[0]=cHJqOjEwNjA0Mw',
      reference: 'https://raw.githubusercontent.com/shopware/admin-api-reference/main/storeapi.json',
      as: 'resources/api/store-api-reference.html',
    }, false);
  }
});
