import {buildSidebarNav, readSidebar} from "../node_modules/vitepress-shopware-docs/src/core/composables/Sidebar";

const navigation = buildSidebarNav([
    {
        link: '/apps/',
        text: 'Apps',
        from: './src/apps/',
    },
    {
        link: '/themes/',
        text: 'Themes',
        from: './src/themes/',
    },
    {
        link: '/frontends/',
        text: 'Frontends',
        from: './src/frontends/',
        repo: 'shopware/frontends',
    },
    {
        link: '/integrations/',
        text: 'Integrations',
        from: './src/integrations/',
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
                        repo: 'github.com/shopware/meteor-icon-kit',
                    },
                    {
                        text: "Component Library",
                        link: "/resources/meteor-component-library/",
                        repo: 'shopware/meteor-component-library/',
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
]);

// added to admin-extension-sdk/.github/scripts/docs.yml
navigation.sidebar['/resources/admin-extension-sdk/'] = readSidebar('resources/admin-extension-sdk', './src/resources/admin-extension-sdk/');

export default navigation;