---
editLink: false
swag:
  related: false
sidebar: true
---

<script setup>
const landing = {
    title: `Automate, integrate & connect`,
    image: 'https://store.shopware.com/media/image/themes-illustration.png',
};

const ctas = [
    {
        title: 'Admin API Quickstart',
        sub: 'Dive into the basics of authentication, privileges, reading and writing data, working with errors.',
        page: '/resources/api/admin-api-reference.htm',
    },
];

const exposed = [
    {
        title: `App Scripts`,
        page: '/docs/guides/plugins/apps/app-scripts/',
        sub: `Leverage App Scripts to customize the checkout or fetch additional data in your Storefront.`,
        image: '/landing/exposed_app.png',
    },
    {
        title: `Custom Templates`,
        page: '/docs/guides/plugins/apps/app-scripts/',
        sub: `Custom templates let you extend or modify the appearance of parts of your storefront.`,
        image: '/landing/exposed_templates.png',
    },
    {
        title: `Admin Extensions`,
        page: '/docs/guides/plugins/apps/starter/starter-admin-extension.html',
        sub: `Build powerful modules for the admin panel using our new Admin Extension API.`,
        image: '/landing/exposed_admin.png',
    },
];
</script>

<SwagLanding
v-bind="landing"
:ctas="ctas"
:exposed="exposed" />