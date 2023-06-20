import {buildSidebarNav} from "../node_modules/vitepress-shopware-docs/src/shopware/composables/Sidebar";

const navigation = buildSidebarNav('./src/', [
    {
        link: '/apps/',
        //link: '/docs/guides/plugins/apps/',
        text: 'Apps',
    },
    {
        link: '/themes/',
        //link: '/docs/guides/plugins/themes/',
        text: 'Themes',
    },
    {
        //link: '/frontends/',
        link: 'https://shopware-frontends-docs.vercel.app/',
        text: 'Frontends',
        repo: 'shopware/frontends',
    },
    {
        link: '/integrations/',
        //link: '/docs/guides/integrations-api/',
        text: 'Integrations',
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
                text: "Administration",
                items: [
                    {
                        text: "Admin Extension SDK",
                        // link: "/resources/admin-extension-sdk/",
                        link: 'https://shopware.github.io/admin-extension-sdk/',
                        repo: 'shopware/admin-extension-sdk',
                    },
                    {
                        text: "Meteor Icon Kit",
                        link: "/resources/meteor-icon-kit/",
                        repo: 'shopware/meteor-icon-kit',
                    },
                    {
                        text: "Component Library",
                        // link: "/resources/meteor-component-library/",
                        link: 'https://shopware.github.io/meteor-component-library/',
                        repo: 'shopware/meteor-component-library',
                    }
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
    '/docs/',
    '/docs/v6.4/',
    '/docs/v6.3/',
    //'/resources/admin-extension-sdk/',
    //'/resources/meteor-component-library/',
    '/', // always have root sidebar
    '/resources/meteor-icon-kit/',
]);

export default navigation;