import {buildSidebarNav} from "../node_modules/vitepress-shopware-docs/src/shopware/composables/Sidebar";
import fs from "fs";

const navigation = buildSidebarNav('./src/', [
    {
        link: '/docs/',
        text: 'Docs',
    },
    {
        link: '/apps.html',
        text: 'Apps',
    },
    {
        link: '/themes.html',
        text: 'Themes',
    },
    {
        link: '/integrations.html',
        text: 'APIs',
    },
    {
        link: '/frontends/',
        text: 'Frontends',
        repo: 'shopware/frontends',
    },
    {
        text: "Resources",
        activeMatch: `^/(api)`,
        items: [
            {
                text: "HTTP APIs",
                items: [
                    {
                        text: "Store API",
                        // link: "/resources/api/store-api-reference",
                        link: 'https://shopware.stoplight.io/docs/store-api/',
                        repo: 'shopware/store-api-reference',
                    },
                    {
                        text: "Admin API",
                        //link: "/resources/api/admin-api-reference",
                        link: 'https://shopware.stoplight.io/docs/admin-api/',
                        repo: 'shopware/admin-api-reference',
                    }
                ]
            },
            {
                text: "Meteor",
                items: [
                    {
                        text: "Meteor Admin SDK",
                        link: "/resources/admin-extension-sdk/",
                        repo: 'shopware/meteor-admin-sdk',
                    },
                    {
                        text: "Meteor Icon Kit",
                        link: "/resources/meteor-icon-kit/",
                        repo: 'shopware/meteor',
                    },
                    {
                        text: "Meteor Component Library",
                        // link: "/resources/meteor-component-library/",
                        link: 'https://meteor-component-library.vercel.app/',
                        repo: 'shopware/meteor-component-library',
                    }
                ]
            },
            {
                text: "Releases",
                items: [
                    {
                        text: "Release notes",
                        link: "/release-notes/",
                    },
                ]
            },
            {
                text: "Learning",
                items: [
                    {
                        text: "Academy",
                        link: "https://academy.shopware.com/",
                    },
                    {
                        text: "YouTube",
                        link: "https://www.youtube.com/user/shopwareAG"
                    }
                ]
            }
        ]
    },
], [
    //'/docs/',
    '/docs/v6.7/',
    '/docs/v6.5/',
    '/docs/v6.4/',
    '/docs/v6.3/',
    '/resources/admin-extension-sdk/',
    //'/resources/meteor-component-library/',
    '/', // always have root sidebar
    '/resources/meteor-icon-kit/',
    '/release-notes/',
], [
    '/docs/assets/',
    '/docs/v6.7/assets/',
    '/docs/v6.5/assets/',
    '/docs/snippets/',
    '/docs/v6.7/snippets/',
    '/docs/v6.5/snippets/',
    '/docs/README.md',
    '/docs/v6.7/README.md',
    '/docs/v6.5/README.md',
    "/docs/resources/references/adr/YYYY-MM-DD-template.md",
    "/docs/v6.5/resources/references/adr/YYYY-MM-DD-template.md",
    "/docs/v6.7/resources/references/adr/YYYY-MM-DD-template.md",
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