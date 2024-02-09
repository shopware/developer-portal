import { defineConfigWithTheme } from "vitepress";
import type { HeadConfig, TransformContext } from 'vitepress'
import type { Config as ThemeConfig } from "vitepress-shopware-docs";
import baseConfig from "vitepress-shopware-docs/config";
import ViteRequireContext from '@originjs/vite-plugin-require-context'
import {resolve} from "path";
import fs from 'fs';

import { MarkdownTransform } from "../node_modules/@shopware-docs/vitepress/src/plugins/markdownTransform";
import { CssCleanup, baseCleanup } from "../node_modules/@shopware-docs/vitepress/src/plugins/cssCleanup";
import Inspect from "vite-plugin-inspect";
import liveReload from 'vite-plugin-live-reload'
import { withMermaid } from "vitepress-plugin-mermaid";
import topLevelAwait from "vite-plugin-top-level-await";
//import { TsFunctionDescription, TsFunctionsList } from "@shopware-pwa/typer";
import { TsFunctionDescription, TsFunctionsList } from "@shopware-docs/typer";

import {copyAdditionalAssets, createSitemap, storeRedirects, addOGImage} from "../node_modules/@shopware-docs/vitepress/src/helpers";
import {generateMarkdownFromStoplight, getStoplightUrls} from "./helpers/stoplight";
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
      '/docs/v6.6rc/guides/plugins/apps/',
      '/docs/v6.4/guides/plugins/apps/',
      '/docs/v6.3/guides/plugins/apps/',
    ],
  },
  {
    title: 'Themes',
    matches: [
      '/themes/',
      '/docs/guides/plugins/themes/',
      '/docs/v6.6rc/guides/plugins/themes/',
      '/docs/v6.4/guides/plugins/themes/',
      '/docs/v6.3/guides/plugins/themes/',
    ],
  },
  {
    title: 'Plugins',
    matches: [
      '/plugins/',
      '/docs/guides/plugins/plugins/',
      '/docs/v6.6rc/guides/plugins/plugins/',
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
      '/docs/v6.6rc/concepts/',
      '/docs/v6.4/concepts/',
      '/docs/v6.3/concepts/',
    ],
  },
  {
    title: 'Guides',
    matches: [
      '/docs/guides/',
      '/docs/v6.6rc/guides/',
      '/docs/v6.4/guides/',
      '/docs/v6.3/guides/',
    ],
  },
  {
    title: 'Products',
    matches: [
      '/docs/products/',
      '/docs/v6.6rc/products/',
      '/docs/v6.4/products/',
      '/docs/v6.3/products/',
    ],
  },
  {
    title: 'Resources',
    matches: [
      '/docs/resources/',
      '/docs/v6.6rc/resources/',
      '/docs/v6.4/resources/',
      '/docs/v6.3/resources/',
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
      '/docs/v6.6rc/': 'next-6.6',
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
    repository: 'admin-extension-sdk',
    points: {
      '/resources/admin-extension-sdk/': 'main',
    },
    folder: 'docs',
  },
  {
    repository: 'meteor-component-library',
    points: {
      '/resources/meteor-component-library/': 'main',
    },
    folder: 'docs',
  },
  {
    repository: 'meteor-icon-kit',
    points: {
      '/resources/meteor-icon-kit/': 'main',
    },
    folder: 'docs',
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

const usercentricsActive = false;
const usercentrics = (name: string) => (usercentricsActive ? {
  'data-usercentrics': name,
  type: 'text/plain',
} : {});

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
      'docs/v6.6rc/snippets/**',
      // readmes
      'docs/README.md',
      'docs/v6.6rc/README.md',
  ],

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

    // usercentrics
    [
      'link',
      {
        rel: 'preconnect',
        href: '//app.usercentrics.eu',
      }
    ],
    [
      'link',
      {
        rel: 'preconnect',
        href: '//api.usercentrics.eu',
      }
    ],
    [
      'link',
      {
        rel: 'preload',
        href: '//app.usercentrics.eu/browser-ui/latest/loader.js',
        as: 'script',
      }
    ],
    [
      'script',
      {
        async: true,
        src: "https://app.usercentrics.eu/browser-ui/latest/loader.js",
        'data-settings-id': process.env.USERCENTRICS || '',
        id: 'usercentrics-cmp'
      }
    ],

    // rollbar error reporting
    /*[
      'script',
      {...usercentrics('Rollbar Error Reporting')},
      "var _rollbarConfig = {\n" +
      "    accessToken: '9ce3bcf057214c7499eefa8865b981e1',\n" +
      "    captureUncaught: true,\n" +
      "    captureUnhandledRejections: true,\n" +
      "    payload: {\n" +
      "        environment: 'testenv',\n" +
      "        // context: 'rollbar/test'\n" +
      "        client: {\n" +
      "          javascript: {\n" +
      "            code_version: '1.0',\n" +
      "            // source_map_enabled: true,\n" +
      "            // guess_uncaught_frames: true\n" +
      "          }\n" +
      "        }\n" +
      "    }\n" +
      "};\n" +
      "// Rollbar Snippet\n" +
      "!function(r){var e={};function o(n){if(e[n])return e[n].exports;var t=e[n]={i:n,l:!1,exports:{}};return r[n].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=r,o.c=e,o.d=function(r,e,n){o.o(r,e)||Object.defineProperty(r,e,{enumerable:!0,get:n})},o.r=function(r){\"undefined\"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:\"Module\"}),Object.defineProperty(r,\"__esModule\",{value:!0})},o.t=function(r,e){if(1&e&&(r=o(r)),8&e)return r;if(4&e&&\"object\"==typeof r&&r&&r.__esModule)return r;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,\"default\",{enumerable:!0,value:r}),2&e&&\"string\"!=typeof r)for(var t in r)o.d(n,t,function(e){return r[e]}.bind(null,t));return n},o.n=function(r){var e=r&&r.__esModule?function(){return r.default}:function(){return r};return o.d(e,\"a\",e),e},o.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)},o.p=\"\",o(o.s=0)}([function(r,e,o){\"use strict\";var n=o(1),t=o(5);_rollbarConfig=_rollbarConfig||{},_rollbarConfig.rollbarJsUrl=_rollbarConfig.rollbarJsUrl||\"https://cdn.rollbar.com/rollbarjs/refs/tags/v2.26.0/rollbar.min.js\",_rollbarConfig.async=void 0===_rollbarConfig.async||_rollbarConfig.async;var a=n.setupShim(window,_rollbarConfig),l=t(_rollbarConfig);window.rollbar=n.Rollbar,a.loadFull(window,document,!_rollbarConfig.async,_rollbarConfig,l)},function(r,e,o){\"use strict\";var n=o(2),t=o(3);function a(r){return function(){try{return r.apply(this,arguments)}catch(r){try{console.error(\"[Rollbar]: Internal error\",r)}catch(r){}}}}var l=0;function i(r,e){this.options=r,this._rollbarOldOnError=null;var o=l++;this.shimId=function(){return o},\"undefined\"!=typeof window&&window._rollbarShims&&(window._rollbarShims[o]={handler:e,messages:[]})}var s=o(4),d=function(r,e){return new i(r,e)},c=function(r){return new s(d,r)};function u(r){return a((function(){var e=this,o=Array.prototype.slice.call(arguments,0),n={shim:e,method:r,args:o,ts:new Date};window._rollbarShims[this.shimId()].messages.push(n)}))}i.prototype.loadFull=function(r,e,o,n,t){var l=!1,i=e.createElement(\"script\"),s=e.getElementsByTagName(\"script\")[0],d=s.parentNode;i.crossOrigin=\"\",i.src=n.rollbarJsUrl,o||(i.async=!0),i.onload=i.onreadystatechange=a((function(){if(!(l||this.readyState&&\"loaded\"!==this.readyState&&\"complete\"!==this.readyState)){i.onload=i.onreadystatechange=null;try{d.removeChild(i)}catch(r){}l=!0,function(){var e;if(void 0===r._rollbarDidLoad){e=new Error(\"rollbar.js did not load\");for(var o,n,a,l,i=0;o=r._rollbarShims[i++];)for(o=o.messages||[];n=o.shift();)for(a=n.args||[],i=0;i<a.length;++i)if(\"function\"==typeof(l=a[i])){l(e);break}}\"function\"==typeof t&&t(e)}()}})),d.insertBefore(i,s)},i.prototype.wrap=function(r,e,o){try{var n;if(n=\"function\"==typeof e?e:function(){return e||{}},\"function\"!=typeof r)return r;if(r._isWrap)return r;if(!r._rollbar_wrapped&&(r._rollbar_wrapped=function(){o&&\"function\"==typeof o&&o.apply(this,arguments);try{return r.apply(this,arguments)}catch(o){var e=o;throw e&&(\"string\"==typeof e&&(e=new String(e)),e._rollbarContext=n()||{},e._rollbarContext._wrappedSource=r.toString(),window._rollbarWrappedError=e),e}},r._rollbar_wrapped._isWrap=!0,r.hasOwnProperty))for(var t in r)r.hasOwnProperty(t)&&(r._rollbar_wrapped[t]=r[t]);return r._rollbar_wrapped}catch(e){return r}};for(var p=\"log,debug,info,warn,warning,error,critical,global,configure,handleUncaughtException,handleAnonymousErrors,handleUnhandledRejection,captureEvent,captureDomContentLoaded,captureLoad\".split(\",\"),f=0;f<p.length;++f)i.prototype[p[f]]=u(p[f]);r.exports={setupShim:function(r,e){if(r){var o=e.globalAlias||\"Rollbar\";if(\"object\"==typeof r[o])return r[o];r._rollbarShims={},r._rollbarWrappedError=null;var l=new c(e);return a((function(){e.captureUncaught&&(l._rollbarOldOnError=r.onerror,n.captureUncaughtExceptions(r,l,!0),e.wrapGlobalEventHandlers&&t(r,l,!0)),e.captureUnhandledRejections&&n.captureUnhandledRejections(r,l,!0);var a=e.autoInstrument;return!1!==e.enabled&&(void 0===a||!0===a||\"object\"==typeof a&&a.network)&&r.addEventListener&&(r.addEventListener(\"load\",l.captureLoad.bind(l)),r.addEventListener(\"DOMContentLoaded\",l.captureDomContentLoaded.bind(l))),r[o]=l,l}))()}},Rollbar:c}},function(r,e,o){\"use strict\";function n(r,e,o,n){r._rollbarWrappedError&&(n[4]||(n[4]=r._rollbarWrappedError),n[5]||(n[5]=r._rollbarWrappedError._rollbarContext),r._rollbarWrappedError=null);var t=e.handleUncaughtException.apply(e,n);o&&o.apply(r,n),\"anonymous\"===t&&(e.anonymousErrorsPending+=1)}r.exports={captureUncaughtExceptions:function(r,e,o){if(r){var t;if(\"function\"==typeof e._rollbarOldOnError)t=e._rollbarOldOnError;else if(r.onerror){for(t=r.onerror;t._rollbarOldOnError;)t=t._rollbarOldOnError;e._rollbarOldOnError=t}e.handleAnonymousErrors();var a=function(){var o=Array.prototype.slice.call(arguments,0);n(r,e,t,o)};o&&(a._rollbarOldOnError=t),r.onerror=a}},captureUnhandledRejections:function(r,e,o){if(r){\"function\"==typeof r._rollbarURH&&r._rollbarURH.belongsToShim&&r.removeEventListener(\"unhandledrejection\",r._rollbarURH);var n=function(r){var o,n,t;try{o=r.reason}catch(r){o=void 0}try{n=r.promise}catch(r){n=\"[unhandledrejection] error getting `promise` from event\"}try{t=r.detail,!o&&t&&(o=t.reason,n=t.promise)}catch(r){}o||(o=\"[unhandledrejection] error getting `reason` from event\"),e&&e.handleUnhandledRejection&&e.handleUnhandledRejection(o,n)};n.belongsToShim=o,r._rollbarURH=n,r.addEventListener(\"unhandledrejection\",n)}}}},function(r,e,o){\"use strict\";function n(r,e,o){if(e.hasOwnProperty&&e.hasOwnProperty(\"addEventListener\")){for(var n=e.addEventListener;n._rollbarOldAdd&&n.belongsToShim;)n=n._rollbarOldAdd;var t=function(e,o,t){n.call(this,e,r.wrap(o),t)};t._rollbarOldAdd=n,t.belongsToShim=o,e.addEventListener=t;for(var a=e.removeEventListener;a._rollbarOldRemove&&a.belongsToShim;)a=a._rollbarOldRemove;var l=function(r,e,o){a.call(this,r,e&&e._rollbar_wrapped||e,o)};l._rollbarOldRemove=a,l.belongsToShim=o,e.removeEventListener=l}}r.exports=function(r,e,o){if(r){var t,a,l=\"EventTarget,Window,Node,ApplicationCache,AudioTrackList,ChannelMergerNode,CryptoOperation,EventSource,FileReader,HTMLUnknownElement,IDBDatabase,IDBRequest,IDBTransaction,KeyOperation,MediaController,MessagePort,ModalWindow,Notification,SVGElementInstance,Screen,TextTrack,TextTrackCue,TextTrackList,WebSocket,WebSocketWorker,Worker,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload\".split(\",\");for(t=0;t<l.length;++t)r[a=l[t]]&&r[a].prototype&&n(e,r[a].prototype,o)}}},function(r,e,o){\"use strict\";function n(r,e){this.impl=r(e,this),this.options=e,function(r){for(var e=function(r){return function(){var e=Array.prototype.slice.call(arguments,0);if(this.impl[r])return this.impl[r].apply(this.impl,e)}},o=\"log,debug,info,warn,warning,error,critical,global,configure,handleUncaughtException,handleAnonymousErrors,handleUnhandledRejection,_createItem,wrap,loadFull,shimId,captureEvent,captureDomContentLoaded,captureLoad\".split(\",\"),n=0;n<o.length;n++)r[o[n]]=e(o[n])}(n.prototype)}n.prototype._swapAndProcessMessages=function(r,e){var o,n,t;for(this.impl=r(this.options);o=e.shift();)n=o.method,t=o.args,this[n]&&\"function\"==typeof this[n]&&(\"captureDomContentLoaded\"===n||\"captureLoad\"===n?this[n].apply(this,[t[0],o.ts]):this[n].apply(this,t));return this},r.exports=n},function(r,e,o){\"use strict\";r.exports=function(r){return function(e){if(!e&&!window._rollbarInitialized){for(var o,n,t=(r=r||{}).globalAlias||\"Rollbar\",a=window.rollbar,l=function(r){return new a(r)},i=0;o=window._rollbarShims[i++];)n||(n=o.handler),o.handler._swapAndProcessMessages(l,o.messages);window[t]=n,window._rollbarInitialized=!0}}}}]);\n" +
      "// End Rollbar Snippet"
    ],*/

    // GA4 - G-9JLJ6GGB76
    [
      'script',
      { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-9JLJ6GGB76', ...usercentrics('Google Tag Manager') }
    ],

    [
      'script',
      { ...usercentrics('Google Tag Manager') },
      "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-9JLJ6GGB76');"
    ],

    // search console
    [
        'meta',
        {
          name: 'google-site-verification',
          content: '_EHK9hrAzAK9f_GbNmnBO8U1U8-KBID0oD-icZLH-nY',
        }
    ],

    // hotjar
    [
        'script',
        {},
        `(function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:3527584,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`
    ]
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
              'docs/v6.6rc/',
              'docs/v6.4/',
              'docs/v6.3/',
            ],
          },
          '/docs/v6.6rc/': {
            exclude: [
              'docs/',
              'docs/v6.4/',
              'docs/v6.3/',
            ],
            include: [
              'docs/v6.6rc/',
            ]
          },
          '/docs/': {
            exclude: [
              'docs/v6.6rc/',
              'docs/v6.4/',
              'docs/v6.3/',
            ],
          },
          '/docs/v6.4/': {
            exclude: [
              'docs/v6.6rc/',
              'docs/',
              'docs/v6.3/',
            ],
            include: [
              'docs/v6.4/',
            ]
          },
          '/docs/v6.3/': {
            exclude: [
              'docs/v6.6rc/',
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
            'docs/v6.6rc': 'v6.6 (RC)',
            'docs': 'v6.5 (stable)',
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
      {
        src: './resources/meteor-icon-kit/public/icons/regular',
        dst: 'icons/regular',
      },
      {
        src: './resources/meteor-icon-kit/public/icons/solid',
        dst: 'icons/solid',
      },
      {
        src: './docs/products/extensions/b2b-suite/guides/example-plugins',
        dst: 'docs/products/extensions/b2b-suite/guides/example-plugins',
        ext: [
            '.zip'
        ],
      }
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
    await createSitemap(/*stoplightUrls*/);

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
