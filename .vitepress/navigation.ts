import {buildSidebarNav} from "../node_modules/vitepress-shopware-docs/src/core/composables/Sidebar";

const navigation = buildSidebarNav('./src/', [
    {
        link: '/apps/',
        text: 'Apps',
    },
    {
        link: '/themes/',
        text: 'Themes',
    },
    {
        link: '/frontends/',
        text: 'Frontends',
        repo: 'shopware/frontends',
    },
    {
        link: '/integrations/',
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
                        link: "/resources/api/store-api-reference",
                        repo: 'shopware/store-api-reference',
                    },
                    {
                        text: "Admin API",
                        link: "/resources/api/admin-api-reference",
                        repo: 'shopware/admin-api-reference',
                    }
                ]
            },
            {
                text: "Administration",
                items: [
                    {
                        text: "Admin Extension SDK",
                        link: "/resources/admin-extension-sdk/",
                        repo: 'shopware/admin-extension-sdk',
                    },
                    {
                        text: "Meteor Icon Kit",
                        link: "/resources/meteor-icon-kit/",
                        repo: 'shopware/meteor-icon-kit',
                    },
                    {
                        text: "Component Library",
                        link: "/resources/meteor-component-library/",
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
    //'/docs/v6.3/',
    '/resources/admin-extension-sdk/',
    '/resources/meteor-component-library/',
]);

export default navigation;