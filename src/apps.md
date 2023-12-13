---
aside: false
sidebar: false
swag:
  related: false
---

<script setup>
import SwagLinkLine from "./components/SwagLinkLine.vue";
</script>

<SwagLanding>
    <template #title>Build the functionalities merchants need</template>
    <template #description>
        Leverage Shopware's extension APIs to build unique extensions that boost merchants' businesses. Use the powerful plugin system to build highly custom extensions or apps using the platform of your choice..
    </template>
    <template #ctas>
        <PageRef page="/docs/guides/plugins/apps/app-base-guide.html" title="Build your first Shopware app" sub="Learn how to set up your development environment and start coding within a couple of minutes." />
    </template>
    <template #exposed>
        <SwagLinkLine file="src/apps.md">
            <a href="#">
              <SwagIcon icon="github"/>
              Start discussion on GitHub
            </a>
        </SwagLinkLine>
        <SwagLandingCardList>
            <template #title>Starter guides</template>
            <template #description>
                The number of topics that are available for exploration can be overwhelming. To help you navigate this complexity, we have curated tutorials that are designed to familiarize you with some of our core concepts.
            </template>
            <template #cards>
            <!--<SwagLandingCard page="https://github.com/shopware/app-php-sdk/blob/main/docs/01-getting_started.md">
                    <template #title>App SDK</template>
                    <template #sub>Tools and libraries that simplify the custom app development process for the Shopware platform.</template>
                </SwagLandingCard>-->
            <!--<SwagLandingCard page="/docs/guides/plugins/apps/local-development/app-development-with-platform-sh.html">
                    <template #title>Local app development</template>
                    <template #sub>Learn how to develop your app on Platform.sh or with Docker.</template>
                </SwagLandingCard>-->
            <PageRef page="/docs/guides/plugins/apps/starter/product-translator.html">
                <template #title></template>
                <template #sub>Learn how to set up an app server and read/write data to the Shopware APIs.</template>
            </PageRef>
            <PageRef page="/docs/guides/plugins/apps/starter/add-api-endpoint.html">
                <template #title>Add custom API</template>
                <template #sub>Learn how to add different custom API endpoints that delivers dynamic data.</template>
            </PageRef>
            <PageRef page="/docs/guides/plugins/apps/starter/starter-admin-extension.html">
                <template #title>Extend Admin UI</template>
                <template #sub>Learn how to extend modules for the admin panel using Admin Extension API.</template>
            </PageRef>
            <!--<SwagLandingCard page="/docs/guides/plugins/apps/hosting-guide/">
                    <template #title>Hosting guide</template>
                    <template #sub>Not all apps need hosting. Explore the server options.</template>
                </SwagLandingCard>-->
            </template>
        </SwagLandingCardList>
        <SwagLandingCardList>
            <template #title>Highlights</template>
            <template #description>
                Apps can add and customize new features and functionalities to your Shopware store. These can include things like payment gateways, product catalogs, search filters, and more.
            </template>
            <div class="grid gap-8">
                <div class="grid md:grid-cols-2 gap-8">
                    <SwagCardSummary icon="shopping-cart">
                        <template #title>Checkout</template>
                        <ul>
                            <li><a href="/docs/guides/plugins/apps/app-scripts/cart-manipulation#calculating-the-cart">Calculate cart</a></li>
                            <li><a href="/docs/guides/plugins/apps/app-scripts/cart-manipulation#add-a-relative-discount">Define custom prices and evaluate discounts</a></li>
                            <li><a href="/docs/guides/plugins/apps/tax-provider#tax-provider-endpoint">Calculate taxes</a></li>
                            <li><a href="/docs/guides/plugins/apps/app-scripts/cart-manipulation#split-line-items">Modify line items</a></li>
                            <li><a href="/docs/guides/plugins/apps/custom-data/">Add custom data</a></li>
                            <li><a href="/docs/guides/plugins/apps/app-scripts/cart-manipulation.html#rule-based-cart-scripts">Rule-based scripts</a></li>
                            <li><a href="/docs/guides/plugins/apps/app-scripts/cart-manipulation.html#add-errors-and-notifications-to-the-cart">Errors and notifications</a></li>
                            <li><a href="/docs/guides/plugins/apps/payment">Payment & Refunds</a></li>
                        </ul>
                    </SwagCardSummary>
                    <SwagCardSummary icon="storefront">
                        <template #title>Storefront & Administration</template>
                        <ul>
                            <li><a href="/docs/guides/plugins/apps/administration/add-custom-modules">Define features</a></li>
                            <li><a href="/docs/guides/plugins/apps/administration/add-custom-action-button">Add action button</a></li>
                            <li><a href="/docs/guides/plugins/apps/custom-data/custom-fields">Add custom fields</a></li>
                            <li><a href="/docs/guides/plugins/apps/custom-data/custom-entities">Create custom entities</a></li>
                            <li><a href="/docs/guides/plugins/apps/administration/add-custom-action-button#providing-feedback-in-the-administration">Send notifications</a></li>
                            <li><a href="/docs/guides/plugins/apps/storefront/customize-templates">Customize Templates</a></li>
                            <li><a href="/docs/guides/plugins/apps/storefront/apps-as-themes">Configure Themes</a></li>
                        </ul>
                    </SwagCardSummary>
                </div>
                <div class="grid md:grid-cols-3 gap-8">
                    <SwagCardSummary icon="content">
                        <template #title>Content</template>
                        <ul>
                            <li><a href="/docs/concepts/commerce/content/shopping-experiences-cms">Redefine shopping experiences</a></li>
                            <li><a href="/docs/guides/plugins/apps/content/cms/add-custom-cms-blocks#overview">Customized layout styling</a></li>
                            <li><a href="/docs/guides/plugins/apps/content/cms/add-custom-cms-blocks#defining-slots">Customize CMS layout</a></li>
                            <li><a href="/docs/guides/plugins/apps/custom-data/custom-fields">Custom Fields</a></li>
                            <li><a href="/docs/guides/plugins/apps/app-scripts/#translation">Define Translations</a></li>
                        </ul>
                    </SwagCardSummary>
                    <SwagCardSummary icon="inventory">
                        <template #title>Products and Catalog</template>
                        <ul>
                            <li><a href="/docs/guides/plugins/apps/app-scripts/data-loading">Store details</a></li>
                            <li><a href="/docs/guides/plugins/apps/app-scripts/data-loading#search-criteria">Define Searches</a></li>
                            <li><a href="/docs/guides/plugins/apps/app-scripts/data-loading.html#loading-data">Stock Availability</a></li>
                            <li><a href="/docs/guides/plugins/apps/app-scripts/data-loading.html#adding-data-to-the-page-object">New Products and Categories</a></li>
                            <li><a href="/docs/guides/plugins/apps/app-scripts/custom-endpoints#caching">Cache Configuration</a></li>
                        </ul>
                    </SwagCardSummary>
                    <SwagCardSummary icon="crossselling">
                        <template #title>Workflow</template>
                        <ul>
                            <li><a href="/docs/guides/plugins/apps/flow-builder/add-custom-flow-actions-from-app-system">Build Workflow</a></li>
                            <li><a href="/docs/guides/plugins/apps/app-base-guide.html#webhooks">Create Webhooks</a></li>
                            <li><a href="/docs/guides/plugins/plugins/checkout/document/add-custom-document-type#adding-a-generator">Generate Documents</a></li>
                            <li><a href="/docs/guides/plugins/apps/rule-builder/add-custom-rule-conditions">Build Rules</a></li>
                        </ul>
                    </SwagCardSummary>
                </div>
            </div>
        </SwagLandingCardList>
    </template>
    <!--<template #exposed2>
        <SwagLandingCardList>
            <template #title>Product areas</template>
            <template #description>
                If you prefer to dig into a specific topic directly, choose from one of the product areas. You can also find them on the left all the time.
            </template>
            <template #cards>
                <SwagLandingCard page="./cart/">
                    <template #title>Cart</template>
                    <template #sub>Modify the cart, add custom data or calculate taxes</template>
                </SwagLandingCard>
                <SwagLandingCard page="./checkout/">
                    <template #title>Checkout</template>
                    <template #sub>Apply discounts, price calculations or control shipping method availabilities</template>
                </SwagLandingCard>
                <SwagLandingCard page="./payment/">
                    <template #title>Payment</template>
                    <template #sub>Handle payments from different gateways or process refunds</template>
                </SwagLandingCard>
                <SwagLandingCard page="./storefront/">
                    <template #title>Storefront</template>
                    <template #sub>Build extensions or themes for the customer storefront using templates or custom styles</template>
                </SwagLandingCard>
                <SwagLandingCard page="./administration/">
                    <template #title>Administration</template>
                    <template #sub>Explore the possibilities of custom admin modules or extensions</template>
                </SwagLandingCard>
                <SwagLandingCard page="./content/">
                    <template #title>Content</template>
                    <template #sub>Build custom content elements or add custom fields to existing entities</template>
                </SwagLandingCard>
                <SwagLandingCard page="./flow-builder/">
                    <template #title>Flow Builder</template>
                    <template #sub>Add custom actions that for third party integrations or automate processes</template>
                </SwagLandingCard>
                <SwagLandingCard page="./products-and-catalog/">
                    <template #title>Products & Catalog</template>
                    <template #sub>Extend the product definition or add custom fields to the product</template>
                </SwagLandingCard>
                <SwagLandingCard page="./workflow/">
                    <template #title>Workflow</template>
                    <template #sub>Build custom states and transitions for orders or add custom fields to existing entities</template>
                </SwagLandingCard>
            </template>
        </SwagLandingCardList>
    </template>-->
    <!--<template #exposed3>
        <SwagLandingCardList>
            <template #title>Related topics</template>
            <template #cards>
                <SwagLandingCard page="/docs/guides/plugins/apps/local-development/app-development-with-platform-sh.html">
                    <template #title>Add apps locally</template>
                    <template #sub>Learn how to add app server to your local development setup on Platform.sh or with Docker.</template>
                </SwagLandingCard>
                <SwagLandingCard page="/docs/guides/plugins/apps/starter/starter-admin-extension.html">
                    <template #title>Shopware CLI</template>
                    <template #sub>Your tool when it comes to app development, installation, and deployments.</template>
                </SwagLandingCard>
            <SwagLandingCard page="/docs/guides/plugins/apps/hosting-guide/">
                    <template #title>Hosting guide</template>
                    <template #sub>Not all apps need hosting. Explore the server options.</template>
                </SwagLandingCard>
            <SwagLandingCard page="/docs/guides/plugins/apps/app-scripts/">
                    <template #title>App scripts</template>
                    <template #sub>Leverage app scripts to customize the checkout or fetch additional data in your Storefront.</template>
                </SwagLandingCard>
            <SwagLandingCard page="/docs/guides/plugins/apps/app-scripts/">
                    <template  #title>Customize templates</template>
                    <template #sub>Custom templates let you extend or modify the appearance of parts of your Storefront.</template>
                </SwagLandingCard>
                <SwagLandingCard page="/docs/guides/plugins/apps/starter/starter-admin-extension.html">
                    <template #title>Admin Extensions</template>
                    <template #sub>Build powerful modules for the admin panel using our new Admin Extension API.</template>
                </SwagLandingCard>
            </template>
        </SwagLandingCardList>
    </template>-->
</SwagLanding>
