import {buildSidebarNav} from "../node_modules/vitepress-shopware-docs/src/shopware/composables/Sidebar";
import {resourcesMenu} from "../node_modules/vitepress-shopware-docs/src/shopware/config/shared";
import fs from "fs";

const navigation = buildSidebarNav('./src/', [
    /*{
        text: 'Home',
        link: '/',
    },*/
    {
        component: 'SwagBuildersNav',
    },
    {
        text: 'Platform',
        items: [
            {
                text: 'Concepts',
                items: [
                    {
                        text: 'Commerce',
                        link: '/docs/concepts/commerce/',
                    },
                    {
                        text: 'Framework',
                        link: '/docs/concepts/framework/',
                    },
                    {
                        text: 'Extensions',
                        link: '/docs/concepts/extensions/',
                    },
                    {
                        text: 'API',
                        link: '/docs/concepts/api/',
                    },
                ],
            },
            {
                text: 'Resources',
                items: [
                    {
                        text: 'References',
                        link: '/docs/resources/references/',
                    },
                    {
                        text: 'Guidelines',
                        link: '/docs/resources/guidelines/',
                    },
                ],
            },
            {
                text: 'API',
                items: [
                    {
                        text: 'Store API',
                        link: '/docs/concepts/commerce/',
                    },
                    {
                        text: 'Admin API',
                        link: '/docs/concepts/framework/',
                    },
                ],
            },
        ],
    },
    {
        text: 'Development',
        items: [
            {
                text: 'Guides',
                items: [
                    {
                        text: 'Installation',
                        link: '/docs/guides/installation/',
                    },
                    {
                        text: 'Development',
                        link: '/docs/guides/development/',
                    },
                    {
                        text: 'Hosting and deployment',
                        link: '/docs/guides/hosting/',
                    },
                    {
                        text: 'Upgrades and migrations',
                        link: '/docs/guides/upgrades-migrations/',
                    },
                ],
            },
            {
                text: 'Environment',
                items: [
                    {
                        text: 'Local',
                        link: '/docs/environment/cli/',
                    },
                    {
                        text: 'SaaS',
                        link: '/docs/environment/saas/',
                    },
                    {
                        text: 'PaaS',
                        link: '/docs/environment/paas/',
                    },
                    {
                        text: 'Shopware.Build',
                        link: '/docs/environment/cli/',
                    },
                ],
            },
            {
                text: 'Tools',
                items: [
                    {
                        text: 'Shopware CLI',
                        link: '/docs/environment/cli/',
                    },
                    {
                        text: 'Shopware MCP',
                        link: '/docs/environment/mcp/',
                    },
                ]
            },
        ],
    },
    {
        text: 'Extensions',
        items: [
            {
                text: 'Development',
                items: [
                    {
                        text: 'Apps',
                        link: '/docs/guides/plugins/apps/',
                    },
                    {
                        text: 'Plugins',
                        link: '/docs/guides/plugins/plugins/',
                    },
                    {
                        text: 'Themes',
                        link: '/docs/guides/plugins/themes/',
                    },
                ],
            },
            {
                text: 'Community edition',
                items: [
                    {
                        text: 'Migration assistant',
                        link: '/docs/products/extensions/migration-assistant/',
                    },
                    {
                        text: 'Subscriptions',
                        link: '/docs/products/extensions/subscriptions/',
                    },
                ],
            },
            {
                text: 'Available in Plans',
                items: [
                    {
                        text: 'Commercial',
                        link: '/docs/products/extensions/commercial/',
                    },
                    {
                        text: 'Advanced search',
                        link: '/docs/products/extensions/advanced-search/',
                    },
                    {
                        text: 'B2B Suite',
                        link: '/docs/products/extensions/b2b-suite/',
                    },
                    {
                        text: 'B2B Components',
                        link: '/docs/products/extensions/b2b-components/',
                    },
                    {
                        text: 'B2B Suite Migration',
                        link: '/docs/products/extensions/b2b-suite-migration/',
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
                        link: '/docs/products/projects/frontends/',
                    },
                    {
                        text: 'Sales Agent',
                        link: '/docs/products/projects/sales-agent/',
                    },
                    {
                        text: 'Digital Sales Rooms',
                        link: '/docs/products/projects/digital-sales-rooms/',
                    },
                ],
            },
            {
                text: 'Software',
                items: [
                    {
                        text: 'Nexus',
                        link: '/docs/products/projects/Nexus/',
                    },
                ],
            },
            {
                text: 'Meteor',
                items: [
                    {
                        text: 'Meteor tokens',
                        link: '/meteor/tokens/',
                    },
                    {
                        text: 'Meteor icon kit',
                        link: '/resources/meteor-icon-kit/',
                    },
                    {
                        text: 'Admin extension SDK',
                        link: '/resources/admin-extension-sdk/',
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

    '/docs/products/projects/Nexus/',
    '/docs/products/cli/',
    '/docs/products/extensions/migration-assistant/',
    '/docs/products/extensions/b2b-suite/',
    '/docs/products/extensions/b2b-components/',
    '/docs/products/extensions/b2b-suite-migration/',
    '/docs/products/extensions/commercial/',
    '/docs/products/extensions/advanced-search/',
    '/docs/products/extensions/subscriptions/',
    '/docs/products/paas/',
    '/docs/products/sales-agent/',
    '/docs/products/digital-sales-rooms/',
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

export default navigation;