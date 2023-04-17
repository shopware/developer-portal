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
        title: 'Starter guides',
        description: 'The amount of topics to start with can be overwhelming. For that reason we have prepared a handful of step-by-step tutorials to follow along that make you familiar with some of our concepts:',
        exposed: [
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
        ]
    },
    {
        title: 'Product areas',
        description: 'If you prefer to dig into a specific topic directly, choose from one of the product areas. You can also find them on the left all the time.',
        exposed: [
            {
                title: `Checkout`,
                page: './checkout/',
                sub: `Apply discounts, price calculations or control shipping method availabilities`,
                image: '/landing/exposed_app.png',
            },
            {
                title: `Payment`,
                page: './payment/',
                sub: `Handle payments from different gateways or process refunds`,
                image: '/landing/exposed_templates.png',
            },
            {
                title: `Storefront`,
                page: './storefront/',
                sub: `Build extensions or themes for the customer storefront using templates or custom styles`,
                image: '/landing/exposed_admin.png',
            },
            {
                title: `Flow Builder`,
                page: './flow-builder/',
                sub: `Add custom actions that for third party integrations or automate processes`,
                image: '/landing/exposed_admin.png',
            },
            {
                title: `Custom Data`,
                page: './custom-data/',
                sub: `Store custom data, entites or relationships in your Shopware store`,
                image: '/landing/exposed_admin.png',
            },
            {
                title: `Configuration`,
                page: './configuration/',
                sub: `Add configuration options to allow users to control your App's behavior`,
                image: '/landing/exposed_admin.png',
            },
            {
                title: `Administration`,
                page: './administration/',
                sub: `Explore the possibilities of custom admin modules or extensions`,
                image: '/landing/exposed_admin.png',
            },
        ]
    },
    {
        title: 'Related topics',
        exposed: [
            {
                title: `App Scripts`,
                page: '/docs/guides/plugins/apps/app-scripts/',
                sub: `Leverage App Scripts to customize the checkout or fetch additional data in your Storefront.`,
                image: '/landing/exposed_app.png',
            },
            {
                title: `Customize templates`,
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
            {
                title: `Shopware CLI`,
                page: '/docs/guides/plugins/apps/starter/starter-admin-extension.html',
                sub: `Your tool when it comes to app development, installation and deployments.`,
                image: '/landing/exposed_admin.png',
            },
        ]
    },
];
</script>

<SwagLanding
v-bind="landing"
:ctas="ctas"
:exposed="exposed"
/>