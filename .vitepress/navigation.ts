
import {readSidebar} from "../node_modules/vitepress-shopware-docs/src/core/composables/Sidebar";
//import {readSidebar} from "vitepress-shopware-docs/src/core/composables/Sidebar";
//import {readSidebar} from "vitepress-shopware-docs";

const multiSidebar = (links) => links.reduce((data, item) => {
    const {link, text, items, from, repo} = item;

    // build sidebar
    if (link) {
        data.sidebar[link] = readSidebar(link.substring(1, link.length - 2), from, false);
    }

    // add to navigation
    const nav = {
        text,
        link,
    };
    if (link) {
        nav.activeMatch = `^${link}`;
    }
    if (repo) {
        nav.repo = repo;
    }
    if (items) {
        nav.items = items;
    }
    data.nav.push(nav);

    return data;
}, {sidebar: {}, nav: []});

export default multiSidebar([
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
                        link: "/resources/api/admin-extension-sdk",
                        repo: 'shopware/admin-extension-sdk',
                    },
                    {
                        text: "Meteor Icon Kit",
                        link: "/resources/meteor-icon-kit",
                        repo: 'github.com/shopware/meteor-icon-kit',
                    },
                    {
                        text: "Component Library",
                        link: "/resources/meteor-component-library",
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
]);

/*const sidebar = {
  '/apps/': readSidebar('apps', './src/apps/'),
  '/frontends/': readSidebar('frontends', './src/frontends/'),
  '/integrations/': readSidebar('integrations', './src/integrations/'),
  '/resources/': readSidebar('resources', './src/resources/'),
  '/themes/': readSidebar('themes', './src/themes/'),
};

const nav = [
  {
    activeMatch: "^/apps/",
    text: "Apps2",
    link: '/apps/'
  },
];*/