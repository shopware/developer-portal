<template>
    <template v-if="false" v-for="item in menu.items" :key="JSON.stringify(item)">
      <VPNavBarMenuLink :item="item" />
    </template>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vitepress'

import VPNavBarMenuLink from 'vitepress/dist/client/theme-default/components/VPNavBarMenuLink.vue'

// this needs to be registered by the extension somehow
// should there be a plugin that discovered inherited config?
const menus = [
    {
        // defined in shopware/docs
        when: (url: string) => url.startsWith('/docs/'),
        items: [
            {
                link: '/docs/',
                text: 'Docs',
            },
            {
                link: '/docs/guides/plugins/apps/',
                text: 'Apps',
            },
            {
                link: '/docs/guides/plugins/themes/',
                text: 'Themes',
            },
            {
                link: '/docs/guides/plugins/plugins/',
                text: 'Plugins',
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
        ],
    },
    {
        // defined in shopware/frontends
        when: (url: string) => url.startsWith('/frontends/'),
        items: [
            {
                link: '/frontends/',
                text: 'Frontends',
            },
            {
                link: '/frontends/framework/',
                text: 'Framework',
            },
            {
                link: '/frontends/getting-started/',
                text: 'Getting started',
            },
            {
                link: '/frontends/best-practices/',
                text: 'Best practices',
            },
            {
                link: '/frontends/resources/',
                text: 'Resources',
            },
            {
                link: '/frontends/packages/',
                text: 'Package reference',
            },
        ],
    },
    {
        // defined in shopware/design-portal or shopware/developer-portal directly?
        when: (url: string) => url.startsWith('/meteor/'),
        items: [
            {
                link: '/meteor/',
                text: 'Meteor',
            },
            {
                link: '/meteor/get-started/',
                text: 'Get started',
            },
            {
                link: '/meteor/foundations/',
                text: 'Foundations',
            },
            {
                link: '/meteor/product-experience/',
                text: 'Product Experience',
            },
            {
                link: '/meteor/tokens/',
                text: 'Design Tokens',
            },
            {
                link: '/meteor/icons/',
                text: 'Icons',
            },
            {
                link: '/meteor/meteor-components/',
                text: 'Components',
            },
            {
                // mounted from shopware/meteor
                link: '/resources/admin-extension-sdk/',
                text: 'Admin SDK',
            },
            {
                link: '/meteor/team/',
                text: 'Team',
            },
        ],
    },
    {
        // fallback, default, defined in developer-portal
        items: [
            /*{
                link: '/',
                text: 'Home',
            },
            {
                link: '/docs/',
                text: 'For Developers',
            },
            {
                link: '/meteor/',
                text: 'For Designers',
            },*/
        ],
    },
]

const route = useRoute()
const menu = computed(() => menus.find((menu) => !menu.when || menu.when(route.path)))
</script>