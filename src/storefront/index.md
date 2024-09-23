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
        Shopware Composable Frontends is Shopware's toolkit for creating <b>platform agnostic</b> custom storefronts. The <a href="https://frontends-demo.vercel.app/" target="_blank" rel="noopener noreferrer">demo store</a> implementation is based on <b>Vue.js</b> and <b>Nuxt3</b>.
    </template>
    <template #ctas>
        <PageRef page="/frontends/getting-started/templates.html" title="Start building your first Shopware Frontends project" sub="Take a look at the types of templates we have and how you can set them up in just a few minutes. Choose between blank, demo store, vue, react or astro templates." />
    </template>
    <template #exposed>
        <SwagLinkLine file="src/storefront/index.md" tags="?tags=shopware&tags=composable-frontends" />
        <SwagLandingCardList>
            <template #title>Starter guides</template>
            <template #description>
                The number of topics that are available for exploration can be overwhelming. To help you navigate this complexity, we have curated tutorials that are designed to familiarize you with some of our core concepts.
            </template>
            <template #cards>
                <PageRef page="/frontends/framework/internal-structure.html">
                    <template #title>Internal Structure (Packages)</template>
                    <template #sub>Learn how to use the abstract packages you need for your Project.</template>
                </PageRef>
                <PageRef page="/frontends/getting-started/page-elements/examples/">
                    <template #title>Cookbook recipes</template>
                    <template #sub>Kickstart your frontends project with provided example codes.</template>
                </PageRef>
                <PageRef page="https://stackblitz.com/github/shopware/frontends/tree/main/templates/vue-demo-store">
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
                        <li><a href="https://frontends.shopware.com/getting-started/e-commerce/checkout.html">Create a checkout</a></li>
                        <li><a href="https://frontends.shopware.com/getting-started/e-commerce/payments.html">Payment and Custom Payments</a></li>
                        <li><a href="https://frontends.shopware.com/packages/composables/#cart--checkout">Composables</a></li>
                    </ul>
                </SwagCardSummary>
                <SwagCardSummary icon="storefront">
                    <template #title>Products</template>
                    <ul>
                        <li><a href="https://frontends.shopware.com/getting-started/e-commerce/product-listing.html">Create a Product Listing</a></li>
                        <li><a href="https://frontends.shopware.com/getting-started/e-commerce/product-detail-page.html">Fetch Product detail page</a></li>
                        <li><a href="https://frontends.shopware.com/getting-started/e-commerce/prices.html">Work with Prices</a></li>
                        <li><a href="https://frontends.shopware.com/getting-started/features/wishlist.html">Wishlist Management</a></li>
                        <li><a href="https://frontends.shopware.com/packages/composables/#product">Composables</a></li>
                    </ul>
                </SwagCardSummary>
                <SwagCardSummary icon="Style">
                    <template #title>CMS</template>
                    <ul>
                        <li><a href="https://frontends.shopware.com/getting-started/cms/content-pages.html">Content Pages</a></li>
                        <li><a href="https://frontends.shopware.com/getting-started/cms/create-blocks.html">Create blocks</a></li>
                        <li><a href="https://frontends.shopware.com/getting-started/cms/create-elements.html">Create elements</a></li>
                        <li><a href="https://frontends.shopware.com/getting-started/cms/overwriting-cms.html">Overwriting CMS</a></li>
                        <li><a href="https://frontends.shopware.com/getting-started/cms/customize-components.html">Customize Components</a></li>
                    </ul>
                </SwagCardSummary>
            </div>
        </div>
</SwagLandingCardList>
