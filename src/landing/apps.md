---
editLink: false
swag:
  related: false
---

<script setup>
import SwagLanding from "../components/SwagLanding.vue";

const landing = {
    title: `Build the functionalities merchants need`,
    description: `Leverage Shopware's extension APIs to build unique extensions that boost merchants businesses. Use the powerful plugin system to build highly custom extensions or build apps using your platform of choice.`,
    image: '/landing/apps.png',
};

const ctas = [
    {
        title: 'Build your first Shopware app',
        sub: 'Learn how to set up your development environment and start coding within a couple minutes.',
        page: '/docs/guides/plugins/apps/app-base-guide.html',
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
:exposed="exposed"
/>