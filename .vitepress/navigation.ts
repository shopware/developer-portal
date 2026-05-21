import {buildSidebarNav} from "../node_modules/vitepress-shopware-docs/src/shopware/composables/Sidebar";
import {resourcesMenu} from "../node_modules/vitepress-shopware-docs/src/shopware/config/shared";
import fs from "fs";

const navigation = buildSidebarNav('./src/', [
    /*{
        text: 'Home',
        link: '/',
    },
    {
        component: 'SwagBuildersNav',
    },*/
    {
        text: 'Platform',
        activeMatch: /^\/docs\/concepts\//,
        items: [
            {
                text: 'Concepts',
                activeMatch: /^\/docs\/concepts\//,
                items: [
                    {
                        text: 'Commerce',
                        link: '/docs/concepts/commerce/',
                        activeMatch: '^\\/docs\\/concepts\\/commerce\\/',
                    },
                    {
                        text: 'Framework',
                        link: '/docs/concepts/framework/',
                        activeMatch: '^\\/docs\\/concepts\\/framework\\/',
                    },
                    {
                        text: 'Extensions',
                        link: '/docs/concepts/extensions/',
                        activeMatch: '^\\/docs\\/concepts\\/extensions\\/',
                    },
                    {
                        text: 'API',
                        link: '/docs/concepts/api/',
                        activeMatch: '^\\/docs\\/concepts\\/api\\/',
                    },
                ],
            },
            {
                text: 'Resources',
                items: [
                    {
                        text: 'References',
                        link: '/docs/resources/references/',
                        activeMatch: '^\\/docs\\/resources\\/references\\/',
                    },
                    {
                        text: 'Guidelines',
                        link: '/docs/resources/guidelines/',
                        activeMatch: '^\\/docs\\/resources\\/guidelines\\/',
                    },
                ],
            },
            {
                text: 'API',
                items: [
                    {
                        text: 'Store API',
                        // link: '/resources/store-api/',
                        link: 'https://shopware.stoplight.io/docs/store-api/',
                    },
                    {
                        text: 'Admin API',
                        // link: '/resources/admin-api/',
                        link: 'https://shopware.stoplight.io/docs/admin-api/',
                    },
                ],
            },
        ],
    },
    {
        text: 'Development',
        activeMatch: /^\/docs\/guides\//,
        items: [
            {
                text: 'Guides',
                items: [
                    {
                        text: 'Installation',
                        link: '/docs/guides/installation/',
                        activeMatch: '^\\/docs\\/guides\\/installation\\/',
                    },
                    {
                        text: 'Development',
                        link: '/docs/guides/development/',
                        activeMatch: '^\\/docs\\/guides\\/development\\/',
                    },
                    {
                        text: 'Hosting and deployment',
                        link: '/docs/guides/hosting/',
                        activeMatch: '^\\/docs\\/guides\\/hosting\\/',
                    },
                    {
                        text: 'Upgrades and migrations',
                        link: '/docs/guides/upgrades-migrations/',
                        activeMatch: '^\\/docs\\/guides\\/upgrades-migrations\\/',
                    },
                ],
            },
            {
                text: 'Environment',
                items: [
                    {
                        text: 'Local',
                        // link: '/docs/environment/cli/',
                        // link: '/docs/products/tools/cli/',
                        link: '/docs/guides/installation/',
                    },
                    {
                        text: 'SaaS',
                        // link: '/docs/environment/saas/',
                        // link: '/docs/products/environments/saas.html',
                        link: '/docs/products/saas.html',
                    },
                    {
                        text: 'PaaS',
                        // link: '/docs/environment/paas/',
                        // link: '/docs/products/environments/paas/',
                        link: '/docs/products/paas/',
                        activeMatch: '^\\/docs\\/products\\/paas\\/',
                    },
                    /*{
                        text: 'Shopware.Build',
                        link: '/docs/environment/cli/',
                    },*/
                ],
            },
            {
                text: 'Tools',
                items: [
                    {
                        text: 'Shopware CLI',
                        // link: '/docs/products/tools/cli/',
                        link: '/docs/products/tools/cli/',
                        activeMatch: '^\\/docs\\/products\\/tools\\/cli\\/',
                    },
                    /*{
                        text: 'Shopware MCP',
                        // link: '/docs/products/tools/mcp/',
                        link: '/docs/guides/development/tooling/mcp/',
                    },*/
                ]
            },
        ],
    },
    {
        text: 'Extensions',
        activeMatch: /^\/docs\/guides\/plugins\//,
        items: [
            {
                text: 'Development',
                items: [
                    {
                        text: 'Apps',
                        link: '/docs/guides/plugins/apps/',
                        activeMatch: '^\\/docs\\/guides\\/plugins\\/apps\\/',
                    },
                    {
                        text: 'Plugins',
                        link: '/docs/guides/plugins/plugins/',
                        activeMatch: '^\\/docs\\/guides\\/plugins\\/plugins\\/',
                    },
                    {
                        text: 'Themes',
                        link: '/docs/guides/plugins/themes/',
                        activeMatch: '^\\/docs\\/guides\\/plugins\\/themes\\/',
                    },
                ],
            },
            {
                text: 'Community edition',
                items: [
                    {
                        text: 'Migration assistant',
                        link: '/docs/products/extensions/migration-assistant/',
                        activeMatch: '^\\/docs\\/products\\/extensions\\/migration-assistant\\/',
                    },
                    {
                        text: 'Subscriptions',
                        link: '/docs/products/extensions/subscriptions/',
                        activeMatch: '^\\/docs\\/products\\/extensions\\/subscriptions\\/',
                    },
                ],
            },
            {
                text: 'Available in Plans',
                items: [
                    {
                        text: 'Commercial',
                        link: '/docs/products/extensions/commercial/',
                        activeMatch: '^\\/docs\\/products\\/extensions\\/commercial\\/',
                    },
                    {
                        text: 'Advanced search',
                        link: '/docs/products/extensions/advanced-search/',
                        activeMatch: '^\\/docs\\/products\\/extensions\\/advanced-search\\/',
                    },
                    {
                        text: 'B2B Suite',
                        link: '/docs/products/extensions/b2b-suite/',
                        activeMatch: '^\\/docs\\/products\\/extensions\\/b2b-suite\\/',
                    },
                    {
                        text: 'B2B Components',
                        link: '/docs/products/extensions/b2b-components/',
                        activeMatch: '^\\/docs\\/products\\/extensions\\/b2b-components\\/',
                    },
                    {
                        text: 'B2B Suite Migration',
                        link: '/docs/products/extensions/b2b-suite-migration/',
                        activeMatch: '^\\/docs\\/products\\/extensions\\/b2b-suite-migration\\/',
                    },
                ],
            },
        ],
    },
    {
        text: 'Projects',
        items: [
            {
                text: 'Frontends',
                items: [
                    {
                        text: 'Frontends',
                        link: '/frontends/',
                        activeMatch: '^\\/frontends\\/',
                    },
                    {
                        text: 'Sales Agent',
                        // link: '/docs/products/frontends/sales-agent/',
                        link: '/docs/products/sales-agent/',
                        activeMatch: '^\\/docs\\/products\\/sales-agent\\/',
                    },
                    {
                        text: 'Digital Sales Rooms',
                        // link: '/docs/products/frontends/digital-sales-rooms/',
                        link: '/docs/products/digital-sales-rooms/',
                        activeMatch: '^\\/docs\\/products\\/digital-sales-rooms\\/',
                    },
                ],
            },
            {
                text: 'Services',
                items: [
                    {
                        text: 'Nexus',
                        // link: '/docs/products/services/nexus/',
                        link: '/docs/products/nexus/',
                        activeMatch: '^\\/docs\\/products\\/nexus\\/',
                    },
                    /*{
                        text: 'Shopware Payments',
                        link: '/docs/products/services/shopware-payments.md',
                    },
                    {
                        text: 'Shopware Analytics',
                        link: '/docs/products/services/shopware-analytics.md',
                    },
                    {
                        text: 'Shopware Intelligence+',
                        link: '/docs/products/services/shopware-intelligence.md',
                    },*/
                ],
            },
            {
                text: 'Design',
                items: [
                    /*{
                        text: 'Meteor design system',
                        link: '/meteor/',
                        activeMatch: '^\\/meteor\\/(?!tokens(?:\\/|$))',
                    },*/
                    {
                        text: 'Meteor tokens',
                        link: '/meteor/tokens/',
                        activeMatch: '^\\/meteor\\/tokens\\/',
                    },
                    {
                        text: 'Meteor icon kit',
                        link: '/resources/meteor-icon-kit/',
                    },
                    {
                        text: 'Admin extension SDK',
                        link: '/resources/admin-extension-sdk/',
                        activeMatch: '^\\/resources\\/admin-extension-sdk\\/',
                    },
                ],
            },
        ],
    },
    {
        text: 'Resources',
        items: [
            {
                text: 'Releases',
                items: [
                    {
                        text: 'Release notes',
                        link: '/release-notes/',
                    },
                ],
            },
            {
                text: 'Community',
                items: [
                    {
                        text: 'Community Hub',
                        link: 'https://hub.shopware.com/',
                    },
                    {
                        text: 'Discord',
                        link: 'https://chat.shopware.com/',
                    },
                ],
            },
            {
                text: 'Learning',
                items: [
                    {
                        text: 'End-user guide',
                        link: 'https://docs.shopware.com/',
                    },
                    {
                        text: 'YouTube',
                        link: 'https://youtube.com/user/shopwareAG',
                    },
                ],
            },
        ],
    },
    /*resourcesMenu({
        design: 'https://developer.shopware.com/meteor/',
        developer: '/'
    }),*/
], [
    '/docs/',
    '/docs/guides/plugins/apps/',
    '/docs/guides/plugins/plugins/',
    '/docs/guides/plugins/themes/',
    // this should be autodiscovered
    // either from frontmatter in those index.md files (for example sidebar: 'main')
    // or from docs.yml (for example: sidebars: dirs to custom sidebars)
    '/docs/concepts/',
    '/docs/resources/',
    '/docs/guides/',
    
    '/resources/',
    // '/resources/store-api/',
    // '/resources/admin-api/',

    // in migrations
    '/docs/products/paas/',
    '/docs/products/nexus/',
    '/docs/products/tools/cli/',
    '/docs/products/sales-agent/',
    '/docs/products/digital-sales-rooms/',
    // '/docs/products/environments/paas/',
    // '/docs/products/services/nexus/',
    // '/docs/products/tools/cli/',
    // '/docs/products/frontends/sales-agent/',
    // '/docs/products/frontends/digital-sales-rooms/',

    '/docs/products/extensions/migration-assistant/',
    '/docs/products/extensions/b2b-suite/',
    '/docs/products/extensions/b2b-components/',
    '/docs/products/extensions/b2b-suite-migration/',
    '/docs/products/extensions/commercial/',
    '/docs/products/extensions/advanced-search/',
    '/docs/products/extensions/subscriptions/',
    //'/docs/products/paas/',
    '/docs/v6.6/',
    '/docs/v6.5/',
    '/resources/admin-extension-sdk/',
    //'/resources/meteor-component-library/',
    '/', // always have root sidebar - because?
    '/resources/meteor-icon-kit/',
    '/release-notes/',
    '/meteor/',
], [
    '/docs/assets/',
    '/docs/v6.6/assets/',
    '/docs/v6.5/assets/',
    '/docs/snippets/',
    '/docs/v6.6/snippets/',
    '/docs/v6.5/snippets/',
    '/docs/README.md',
    '/docs/v6.6/README.md',
    '/docs/v6.5/README.md',
    "/docs/resources/references/adr/YYYY-MM-DD-template.md",
    "/docs/v6.6/resources/references/adr/YYYY-MM-DD-template.md",
    "/docs/v6.5/resources/references/adr/YYYY-MM-DD-template.md",
    "/docs/AGENTS.md",
    "/resources/admin-extension-sdk/README.md",
    "/resources/admin-extension-sdk/CHANGELOG.md",
]);

const prefixItems = (items, prefix) => items.map(item => {
    if (item.link?.startsWith('/')) {
        item.link = `${prefix}${item.link}`;
    }
    item.items = prefixItems(item.items || [], prefix);
    return item;
})

try {
    navigation.sidebar['/frontends/'] = prefixItems(
        (await import("../src/frontends/_source/apps/docs/.vitepress/sidebar")).sidebar,
        '/frontends'
    );
} catch (e) {
    console.log('Frontends sidebar not found');
}

console.log('navigation', navigation)

export default navigation;