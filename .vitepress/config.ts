import { defineConfigWithTheme } from "vitepress";
import type { HeadConfig, TransformContext } from 'vitepress'
import type { Config as ThemeConfig } from "vitepress-shopware-docs";
import baseConfig from "vitepress-shopware-docs/config";
import ViteRequireContext from '@originjs/vite-plugin-require-context'
import {resolve} from "path";
import fs from 'fs';

import { CssCleanup, baseCleanup, MarkdownTransform, copyAdditionalAssets, createSitemap, storeRedirects, addOGImage, userCentricsHead, generateMarkdownFromStoplight, getStoplightUrls } from "@shopware-docs/vitepress";
import Inspect from "vite-plugin-inspect";
import liveReload from 'vite-plugin-live-reload'
import { withMermaid } from "vitepress-plugin-mermaid";
import topLevelAwait from "vite-plugin-top-level-await";
//import { TsFunctionDescription, TsFunctionsList } from "@shopware-pwa/typer";
import { TsFunctionDescription, TsFunctionsList } from "@shopware-docs/typer";
import navigation from "./navigation";

import {
  SwagEmbedsConfig,
  SwagSectionsConfig,
  SwagSimilarArticlesConfig,
  SwagVersionSwitcherConfig,
  SwagColorCodingConfig
} from "../../developer-documentation-vitepress/src/shopware/config";

const sections: SwagSectionsConfig[] = [
  {
    title: 'Composable Frontends',
    matches: [
      '/frontends/',
    ],
  },
  {
    title: 'Apps',
    matches: [
      '/apps/',
      '/docs/guides/plugins/apps/',
      '/docs/v6.5/guides/plugins/apps/',
      '/docs/v6.4/guides/plugins/apps/',
      '/docs/v6.3/guides/plugins/apps/',
    ],
  },
  {
    title: 'Themes',
    matches: [
      '/themes/',
      '/docs/guides/plugins/themes/',
      '/docs/v6.5/guides/plugins/themes/',
      '/docs/v6.4/guides/plugins/themes/',
      '/docs/v6.3/guides/plugins/themes/',
    ],
  },
  {
    title: 'Plugins',
    matches: [
      '/plugins/',
      '/docs/guides/plugins/plugins/',
      '/docs/v6.5/guides/plugins/plugins/',
      '/docs/v6.4/guides/plugins/plugins/',
      '/docs/v6.3/guides/plugins/plugins/',
    ],
  },
  {
    title: 'Integrations',
    matches: [
      '/integrations/',
    ],
  },
  {
    title: 'Concepts',
    matches: [
      '/docs/concepts/',
      '/docs/v6.5/concepts/',
      '/docs/v6.4/concepts/',
      '/docs/v6.3/concepts/',
    ],
  },
  {
    title: 'Guides',
    matches: [
      '/docs/guides/',
      '/docs/v6.5/guides/',
      '/docs/v6.4/guides/',
      '/docs/v6.3/guides/',
    ],
  },
  {
    title: 'Products',
    matches: [
      '/docs/products/',
      '/docs/v6.5/products/',
      '/docs/v6.4/products/',
      '/docs/v6.3/products/',
    ],
  },
  {
    title: 'Resources',
    matches: [
      '/docs/resources/',
      '/docs/v6.5/resources/',
      '/docs/v6.4/resources/',
      '/docs/v6.3/resources/',
    ],
  },
  {
    title: 'Meteor Admin SDK',
    matches: [
      '/resources/admin-extension-sdk/',
    ],
  },
  {
    title: 'Meteor Icon Kit',
    matches: [
      '/resources/meteor-icon-kit/',
    ],
  },
  {
    title: 'Release notes',
    matches: [
      '/release-notes/',
    ],
  },
  {
    title: 'General',
    matches: [
      '/',
    ],
  },
];

const embeds: SwagEmbedsConfig[] = [
  {
    repository: 'docs',
    points: {
      '/docs/v6.5/': 'v6.5',
      '/docs/v6.4/': 'v6.4',
      '/docs/v6.3/': 'v6.3.0',
      '/docs/': 'main',
    },
    folder: '.',
  },
  {
    repository: 'frontends',
    points: {
      '/frontends/': 'main',
    },
    folder: 'app/docs/docs'
  },
  {
    repository: 'meteor',
    points: {
      '/resources/admin-extension-sdk/': 'main',
    },
    folder: 'packages/admin-sdk/docs',
  },
  {
    repository: 'meteor-component-library',
    points: {
      '/resources/meteor-component-library/': 'main',
    },
    folder: 'docs',
  },
  {
    repository: 'meteor',
    points: {
      '/resources/meteor-icon-kit/': 'main',
    },
    folder: 'packages/icon-kit/docs',
  },
  {
    repository: 'admin-api-reference',
    points: {
      '/resources/api/admin-api-reference/': 'main',
    },
    folder: 'docs',
  },
  {
    repository: 'store-api-reference',
    points: {
      '/resources/api/store-api-reference/': 'main',
    },
    folder: 'docs',
  },
  {
    repository: 'developer-portal',
    points: {
      '/': 'main',
    },
    folder: 'src',
  }
];

const frontendsPath = "../src/frontends/_source";

export default withMermaid(defineConfigWithTheme<ThemeConfig>({
  extends: baseConfig,

  title: "Shopware Documentation",
  description: "Documentation for Shopware developers",
  srcDir: "src",
  srcExclude: [
      // git sources
      "**/_source/**",
      // template
      "docs/resources/references/adr/YYYY-MM-DD-template.md",
      // snippets
      'docs/snippets/**',
      'docs/v6.5/snippets/**',
      // readmes
      '**/README.md',
  ],

  ignoreDeadLinks: true,

  rewrites: {
    'storefront/index.md': 'frontends/index.md',
    'frontends/index.md': 'frontends/overview.md',
    //'landing/apps.md': 'docs/guides/plugins/apps/index.md',
    //'landing/apps.md': 'apps/index.md',
    //'landing/themes.md': 'docs/guides/plugins/themes/index.md',
    //'landing/plugins.md': 'docs/guides/plugins/plugins/index.md',
    //'landing/integrations.md': 'integrations/index.md',
  },

  head: [
    // favicon
    ['link', {rel: "icon", type: "image/png", href: "/favicon.webp"}],
    ['link', {rel: "shortcut icon", href: "/favicon.webp"}],

    // disallow indexing
    // ['meta', {name: 'robots', content: 'noindex'}],

    ...userCentricsHead({
      usercentrics: process.env.USERCENTRICS,
      rollbar: '9ce3bcf057214c7499eefa8865b981e1',
      hotjar: '3527584',
      gtm: 'WJKMNPS',
    }),

    // search console
    [
        'meta',
        {
          name: 'google-site-verification',
          content: '_EHK9hrAzAK9f_GbNmnBO8U1U8-KBID0oD-icZLH-nY',
        }
    ],
  ],

  themeConfig: {
    ...navigation, // add sidebar and nav config

    outline: [2, 3],

    algolia: {
      indexName: "beta-developer-shopware",
      appId: "J1Y01X9HGM",
      apiKey: "711e1cadf66a3957aaf183a58aad12a7",
    },

    swag: {
      // config for the "Edit on GitHub" link and Algolia Search facets (area, version)
      embeds,

      // config for the Algolia Search Modal lvl1
      sections,

      // knowledge index
      similarArticles: {
        host: 'https://ai-ml.fly.dev',
        collection: 'shopware--developer-portal--main',
        filter: {
          'default': {
            exclude: [
              'docs/v6.5/',
              'docs/v6.4/',
              'docs/v6.3/',
            ],
          },
          '/docs/': {
            exclude: [
              'docs/v6.5/',
              'docs/v6.4/',
              'docs/v6.3/',
            ],
          },
          '/docs/v6.5/': {
            exclude: [
              'docs/',
              'docs/v6.4/',
              'docs/v6.3/',
            ],
            include: [
              'docs/v6.5/',
            ]
          },
          '/docs/v6.4/': {
            exclude: [
              'docs/v6.5/',
              'docs/',
              'docs/v6.3/',
            ],
            include: [
              'docs/v6.4/',
            ]
          },
          '/docs/v6.3/': {
            exclude: [
              'docs/v6.5/',
              'docs/',
              'docs/v6.4/',
            ],
            include: [
              'docs/v6.3/',
            ]
          },
        },
      } as SwagSimilarArticlesConfig,
      versionSwitcher: {
        paths: [
          {
            'docs': 'v6.6 (stable)',
            'docs/v6.5': 'v6.5',
            'docs/v6.4': 'v6.4',
            'docs/v6.3': 'v6.3',
          }
        ]
      } as SwagVersionSwitcherConfig,
      colorCoding: [
        {
          link: '/docs/guides/plugins/apps/',
          color: 'from-sw-blue to-sw-blue',
        },
        {
          link: '/docs/concepts/extensions/apps-concept.html',
          color: 'from-sw-blue to-sw-blue',
        },
        {
          link: '/docs/guides/plugins/plugins/',
          color: 'from-sw-purple to-sw-purple',
        },
        {
          link: '/docs/concepts/extensions/plugins-concept.html',
          color: 'from-sw-purple to-sw-purple',
        },
        {
          link: '/docs/guides/plugins/themes/',
          color: 'from-sw-green to-sw-green',
        },
      ] as SwagColorCodingConfig[]
    }
  },

  vite: {
    plugins: [
      Inspect(),
      ViteRequireContext.default({
        projectBasePath: `${process.cwd()}/src`
      }),
      //MarkdownTransform(),
      CssCleanup({
        cleanup: [
            ...baseCleanup,
        ]
      }),
      liveReload([
        '../node_modules/@shopware-docs/**/*.*',
        '../node_modules/vitepress-shopware-docs/**/*.*',
      ]),
      topLevelAwait(),
      TsFunctionsList({
        rootDir: resolve(__dirname, frontendsPath),
        prefix: 'frontends/',
      }),
      TsFunctionDescription({
        rootDir: resolve(__dirname, frontendsPath),
        dirs: !fs.existsSync(resolve(__dirname, frontendsPath)) ? [] : [
          {
            autogenExampleAlias: "api-client",
            functions: resolve(
                __dirname,
                `${frontendsPath}/packages/api-client/src/services/`,
            ),
            types: resolve(
                __dirname,
                `${frontendsPath}/packages/types/shopware-6-client/`,
            ),
          },
          {
            functions: resolve(__dirname, `${frontendsPath}/packages/composables/src/`),
            types: resolve(
                __dirname,
                `${frontendsPath}/packages/types/shopware-6-client/`,
            ),
          },
          {
            functions: resolve(__dirname, `${frontendsPath}/packages/helpers/src/`),
            types: resolve(
                __dirname,
                `${frontendsPath}/packages/types/shopware-6-client/`,
            ),
          },
        ],
      }),
    ],
    server: {
      watch: {
        ignored: (p) => {
          return p.includes('_source') || p.includes('node_modules');
        }
      }
    },
    worker: {
      plugins: () => [
        topLevelAwait()
      ]
    },
    /*optimizeDeps: {
      //disabled: true,
      include: [
        'algoliasearch',
        'algoliasearch-helper',
        'qs',
        '@algolia',
      ],
      exclude: [
        'instantsearch.js',
      ],
    },*/
    build: {
      rollupOptions: {
        external: [
            'vue-instantsearch/vue3/es',
            'instantsearch.css/themes/algolia-min.css',
        ]
      }
    }
  },

  vue: {
    // https://github.com/vitejs/vite/issues/7854
    reactivityTransform: resolve(__dirname, 'src'), // true
  },

  async transformHead(context: TransformContext): Promise<HeadConfig[]> {
    return addOGImage([], context);
  },

  async buildEnd() {
    /**
     * Copy additional assets not present in the assets or public dir.
     */
    await copyAdditionalAssets([
      // shiki
      {
        src: '../node_modules/shiki/languages',
        dst: 'shiki/languages',
      },
      {
        src: '../node_modules/shiki/themes',
        dst: 'shiki/themes',
      },
      {
        src: '../node_modules/shiki/dist',
        dst: 'shiki/dist',
        ext: [
          '.wasm'
        ],
      },
      // meteor-icon-kit
      {
        src: './resources/meteor-icon-kit/public/icons/regular',
        dst: 'icons/regular',
      },
      {
        src: './resources/meteor-icon-kit/public/icons/solid',
        dst: 'icons/solid',
      },
      // custom static files
      {
        src: './docs/products/extensions/b2b-suite/guides/example-plugins',
        dst: 'docs/products/extensions/b2b-suite/guides/example-plugins',
        ext: [
          '.zip'
        ],
      },
      {
        src: './docs/v6.5/products/extensions/b2b-suite/guides/example-plugins',
        dst: 'docs/v6.5/products/extensions/b2b-suite/guides/example-plugins',
        ext: [
          '.zip'
        ],
      },
      {
        src: './docs/v6.4/products/extensions/b2b-suite/guides/example-plugins',
        dst: 'docs/v6.4/products/extensions/b2b-suite/guides/example-plugins',
        ext: [
          '.zip'
        ],
      },
    ]);

    /**
     * Copy redirects.
     */
    await storeRedirects();

    /**
     * Fetch Stoplight URLs.
     */
    /*const stoplightUrls = [
      ...await getStoplightUrls({
        source: 'https://shopware.stoplight.io/api/v1/projects/cHJqOjEwNjA0NQ/table-of-contents',
        prefix: '/resources/api/store-api-reference.html#/',
      }),
      ...await getStoplightUrls({
        source: 'https://shopware.stoplight.io/api/v1/projects/cHJqOjEwNjA0Mw/table-of-contents',
        prefix: '/resources/api/admin-api-reference.html#/',
      }),
    ];*/

    /**
     * Create public sitemap.xml.
     */
    await createSitemap(/*stoplightUrls*/[], 'developer.shopware.com');

    /**
     * Transform Store API JSON reference to Markdown for Knowledge base.
     */
    /*await generateMarkdownFromStoplight({
      source: 'https://shopware.stoplight.io/api/v1/projects/cHJqOjEwNjA0NQ/table-of-contents',
      nodes: 'https://shopware.stoplight.io/api/v1/workspaces/d2s6MzM5MTQ/nodes?project_ids[0]=cHJqOjEwNjA0NQ',
      reference: 'https://raw.githubusercontent.com/shopware/store-api-reference/main/storeapi.json',
      as: 'resources/api/admin-api-reference.html',
    });*/

    /**
     * Transform Admin API JSON reference to Markdown for Knowledge base.
     */
    /*await generateMarkdownFromStoplight({
      source: 'https://shopware.stoplight.io/api/v1/projects/cHJqOjEwNjA0Mw/table-of-contents',
      nodes: 'https://shopware.stoplight.io/api/v1/workspaces/d2s6MzM5MTQ/nodes?project_ids[0]=cHJqOjEwNjA0Mw',
      reference: 'https://raw.githubusercontent.com/shopware/admin-api-reference/main/storeapi.json',
      as: 'resources/api/store-api-reference.html',
    }, false);*/
  }
}));
