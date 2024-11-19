import {buildSidebarNav} from "../node_modules/vitepress-shopware-docs/src/shopware/composables/Sidebar";
import {resourcesMenu} from "../node_modules/vitepress-shopware-docs/src/shopware/config/shared";
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
    resourcesMenu({ design: 'https://shopware.design/', developer: '/' }),
], [
    //'/docs/',
    '/docs/v6.7/',
    '/docs/v6.5/',
    '/docs/v6.4/',
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