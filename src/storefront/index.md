---
aside: false
swag:
  related: false
---

<script setup>
import SwagLinkLine from "../components/SwagLinkLine.vue";
</script>

<SwagLanding image="/landing/apps.png">
    <template #title>Shopware Frontends</template>
    <template #description>
        Shopware Composable Frontends is Shopware's toolkit for creating <b>platform agnostic</b> custom storefronts. The demo store implementation is based on <b>Vue.js</b> and <b>Nuxt3</b>.
    </template>
    <template #ctas>
        <PageRef page="/docs/guides/plugins/apps/app-base-guide.html" title="Start building your first Shopware Frontends project" sub="Learn how to set up your development environment and start coding within a couple of minutes." />
    </template>
    <template #exposed>
        <SwagLinkLine file="src/storefront/index.md" />
        <SwagLandingCardList>
            <template #title>Starter guides</template>
            <template #description>
                The number of topics that are available for exploration can be overwhelming. To help you navigate this complexity, we have curated tutorials that are designed to familiarize you with some of our core concepts.
            </template>
            <template #cards>
                <PageRef page="/frontends/getting-started/templates.html">
                    <template #title>Setup templates</template>
                    <template #sub>Learn how to get started with custom frontend with pre-existing templates.</template>
                </PageRef>
                <PageRef page="/frontends/resources/examples/">
                    <template #title>Cookbook recepies</template>
                    <template #sub>Kickstart your frontends project with provided example codes.</template>
                </PageRef>
                <PageRef page="/frontends/getting-started/templates/demo-store-template.html">
                    <template #title>Vue Demo Store on StackBlitz</template>
                    <template #sub>The demo store template is a reference implementation of an online store UI.</template>
                </PageRef>
            </template>
        </SwagLandingCardList>
    </template>
</SwagLanding>

<SwagLandingCardList>
    <template #title>Highlights</template>
        <template #description>
                Shopware frontends stand as the user-facing interface that customers see and interact with. Frontends play a crucial role in presenting products, content, and overall shopping experience to website visitors. Here, we outline the core functions specific to frontend development in Shopware:
        </template>
        <div class="grid gap-8">
            <div class="grid md:grid-cols-3 gap-8">
                <SwagCardSummary icon="shopping-cart">
                    <template #title>Checkout</template>
                    <ul>
                        <li><a href="https://frontends.shopware.com/getting-started/e-commerce/cart.html">Create a cart</a></li>
                        <li><a href="https://frontends.shopware.com/framework/composables.html">Create a checkout</a></li>
                        <li><a href="https://frontends.shopware.com/framework/shopping-experiences.html">Payment and Custom Payments</a></li>
                        <li><a href="https://frontends.shopware.com/packages/composables.html#cart-checkout">Composables functions</a></li>
                    </ul>
                </SwagCardSummary>
                <SwagCardSummary icon="storefront">
                    <template #title>Products and Catalog</template>
                    <ul>
                        <li><a href="https://frontends.shopware.com/getting-started/e-commerce/product-listing.html">Create a Product Listing</a></li>
                        <li><a href="https://frontends.shopware.com/getting-started/e-commerce/product-detail-page.html">Fetch Product detail page</a></li>
                        <li><a href="https://frontends.shopware.com/getting-started/e-commerce/prices.html">Work with Prices</a></li>
                        <li><a href="https://frontends.shopware.com/getting-started/languages.html">Manage Wishlist</a></li>
                        <li><a href="https://frontends.shopware.com/getting-started/page-elements/">Composables functions</a></li>
                    </ul>
                </SwagCardSummary>
            <SwagCardSummary icon="Style">
                <template #title>CMS</template>
                <ul>
                    <li><a href="https://frontends.shopware.com/getting-started/cms/content-pages.html">Create Content Pages</a></li>
                    <li><a href="https://frontends.shopware.com/getting-started/cms/create-blocks.html">Create blocks</a></li>
                    <li><a href="https://frontends.shopware.com/getting-started/cms/create-elements.html">Create elements</a></li>
                    <li><a href="https://frontends.shopware.com/getting-started/cms/overwriting-cms.html">Overwriting CMS</a></li>
                    <li><a href="https://frontends.shopware.com/getting-started/cms/customize-components.html">Custamize components</a></li>
                </ul>
            </SwagCardSummary>
        </div>
    </div>
</SwagLandingCardList>
