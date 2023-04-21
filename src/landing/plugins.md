---
editLink: false
swag:
  related: false
---

<script setup>
const landing = {
    title: `Craft beautiful themes that inspire`,
    image: 'https://store.shopware.com/media/image/themes-illustration.png',
};

const ctas = [
    {
        title: 'Create a Theme',
        sub: 'Create your first theme from scratch, install and activate it in your development store.',
        page: '/docs/guides/plugins/themes/create-a-theme.html',
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
:exposed="exposed">
    <template #description>
        <p>Themes allow merchants transport their brand and identity. They are the way they present their products and services. Create a theme and sell it on the store, so merchants can use it in their stores.</p>
        <p>Shopware's theme system is based on [Twig.js](#) and an inheritance mechanism, so you can write individual themes without breaking Shopware's core functionalities.</p>
    </template>
</SwagLanding>