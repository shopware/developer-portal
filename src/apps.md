---
_items:
  - text: Getting started
    link: /apps/
  - text: Capabilities
    link: /apps/capabilities
  - text: Areas
    items:
      - text: Cart
        link: /apps/cart/
      - text: Checkout
        link: /apps/checkout/
      - text: Payment
        link: /apps/payment/
      - text: Storefront
        link: /apps/storefront/
      - text: Administration
        link: /apps/administration/
      - text: Content
        link: /apps/content/
      - text: Product & catalog
        link: /apps/products-and-catalog/
      - text: Workflow
        link: /apps/workflow/
  - text: Reference
    items:
      - text: Admin extensions
        link: "https://shopware.github.io/admin-extension-sdk/"
      - text: App scripts
        link: "/docs/guides/plugins/apps/app-scripts/"
      - text: App SDK
        link: "/docs/guides/plugins/apps/app-sdks/"
      - text: Webhooks
        link: "/docs/resources/references/app-reference/webhook-events-reference"
      - text: Admin API
        link: "https://shopware.stoplight.io/docs/admin-api/"
      - text: Store API
        link: "https://shopware.stoplight.io/docs/store-api/"
  - text: App Store
    items:
      - text: Guidelines
        link: "/docs/resources/guidelines/testing/store/quality-guidelines-apps/"
aside: false
sidebar: false
swag:
  related: false
---

<SwagLanding>
    <template #title>Build the functionalities merchants need</template>
    <template #description>
        Leverage Shopware's extension APIs to build unique extensions that boost merchants' businesses. Use the powerful plugin system to build highly custom extensions or apps using the platform of your choice..
    </template>
    <template #ctas>
        <PageRef page="/docs/guides/plugins/apps/app-base-guide.html" title="Build your first Shopware app" sub="Learn how to set up your development environment and start coding within a couple of minutes." />
    </template>
    <template #exposed>
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
                            <li><a href="/docs/guides/plugins/apps/tax-provider#tax-provider-endpoint">Tax provider</a></li>
                            <li><a href="/docs/guides/plugins/apps/app-scripts/cart-manipulation#split-line-items">Modify line items and add custom data</a></li>
                            <li><a href="/docs/guides/plugins/apps/custom-data/">Filter checkout options</a></li>
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
                            <li><a href="/docs/guides/plugins/apps/administration/add-custom-action-button#providing-feedback-in-the-administration">Send notification</a></li>
                            <li><a href="/docs/guides/plugins/plugins/storefront/customize-templates">Templates</a></li>
                            <li><a href="/docs/guides/plugins/apps/storefront/apps-as-themes">Themes</a></li>
                        </ul>
                    </SwagCardSummary>
                </div>
                <div class="grid md:grid-cols-3 gap-8">
                    <SwagCardSummary icon="content">
                        <template #title>Content</template>
                        <ul>
                            <li><a href="/docs/concepts/commerce/content/shopping-experiences-cms">Redefine shopping experiences</a></li>
                            <li><a href="/docs/guides/plugins/apps/content/cms/add-custom-cms-blocks#overview">Customized layout styling</a></li>
                            <li><a href="/docs/concepts/commerce/content/shopping-experiences-cms.html#hydration-of-dynamic-content">Static and dynamic CMS website</a></li>
                            <li><a href="/docs/guides/plugins/apps/content/cms/add-custom-cms-blocks#defining-slots">Apply desired CMS layout</a></li>
                            <li><a href="/docs/guides/plugins/apps/custom-data/custom-fields">Custom fields</a></li>
                            <li><a href="/docs/guides/plugins/apps/app-scripts/#translation">Translations</a></li>
                        </ul>
                    </SwagCardSummary>
                    <SwagCardSummary icon="inventory">
                        <template #title>Products and Catalog</template>
                        <ul>
                            <li><a href="/docs/guides/plugins/apps/app-scripts/data-loading">Store details</a></li>
                            <li><a href="/docs/guides/plugins/apps/app-scripts/data-loading#search-criteria">Search</a></li>
                            <li><a href="/docs/guides/plugins/apps/app-scripts/data-loading.html#loading-data">Stock availability</a></li>
                            <li><a href="/docs/guides/plugins/apps/app-scripts/data-loading.html#adding-data-to-the-page-object">New products and categories</a></li>
                            <li><a href="/docs/guides/plugins/apps/app-scripts/custom-endpoints#caching">Cache configuration</a></li>
                        </ul>
                    </SwagCardSummary>
                    <SwagCardSummary icon="crossselling">
                        <template #title>Workflow</template>
                        <ul>
                            <li><a href="/docs/guides/plugins/apps/flow-builder/add-custom-flow-actions-from-app-system">Build workflow</a></li>
                            <li><a href="/docs/guides/plugins/apps/app-base-guide.html#webhooks">Create webhooks</a></li>
                            <li><a href="/docs/guides/plugins/plugins/checkout/document/add-custom-document-type#adding-a-generator">Generate documents</a></li>
                            <li><a href="/docs/guides/plugins/apps/rule-builder/add-custom-rule-conditions">Rule builder</a></li>
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
