<script setup>
import SwagLanding from "../../components/SwagLanding.vue";
import SwagLandingCard from "../../components/SwagLandingCard.vue";
import SwagLandingCardList from "../../components/SwagLandingCardList.vue";
</script>

<SwagLanding>
    <template #title>Checkout</template>
    <template #description>
        <p><a href="/docs/concepts/commerce/checkout-concept">Checkout</a> system is a critical component of the Shopware platform, handling all <a href="/docs/concepts/commerce/checkout-concept/cart">Cart</a> <a href="/docs/concepts/commerce/checkout-concept/orders">Orders</a> and <a href="/docs/concepts/commerce/checkout-concept/payments">Payments</a>. With Shopware's checkout feature, developers have the flexibility to modify custom cart items, error handling, and custom data. Additionally, the checkout system can be fully customized to match the look and feel of your ecommerce store, allowing for a seamless and intuitive user experience.</p>
        <h1>Capabilities</h1>
    </template>
    <template #exposed2>
        <SwagLandingCardList>
            <template #title>
                Try our template extensions and elevate your Checkout experience:
            </template>
            <template #cards>
                <SwagLandingCard link="/docs/guides/plugins/apps/tax-provider#tax-provider-endpoint">
                    <template #title>Tax provider</template>
                    <template #sub>Calculate tax rate depending on the country, customer and cart details</template>
                    <template #image>
                        <img src="/workspaces/developer-portal/src/public/landing/black.PNG">
                    </template>
                </SwagLandingCard>
                <SwagLandingCard link="/docs/guides/plugins/apps/app-scripts/cart-manipulation#split-line-items">
                    <template #title>Split cart items</template>
                    <template #sub>splits an existing line-item by a given quantity</template>
                </SwagLandingCard>
                <SwagLandingCard link="/docs/guides/plugins/apps/custom-data">
                    <template #title>Filter payment and shipping methods </template>
                    <template #sub>Do you want to evaluate taxes?</template>
                </SwagLandingCard>
                <SwagLandingCard link="/docs/guides/plugins/apps/app-scripts/cart-manipulation">
                    <template #title>Rule based scripts</template>
                    <template #sub>Use the full power of the rule builder to manipulate checkout</template>
                </SwagLandingCard>
                <SwagLandingCard link="/docs/guides/plugins/apps/app-scripts/cart-manipulation">
                    <template #title>Add errors and notification</template>
                    <template #sub>Block the cart's checkout by raising an error or add messages using warning and notice to inform the user</template>
                </SwagLandingCard>
                <SwagLandingCard link="/docs/guides/plugins/apps/app-scripts/cart-manipulation">
                    <template #title>Add custom prices</template>
                    <template #sub>Change the price of a line item in the cart dynamically</template>
                </SwagLandingCard>
            </template>
        </SwagLandingCardList>
    <h1>Change the look</h1>
        <p>You can transform the appearance of your cart with our <a href="/docs/guides/plugins/plugins/storefront/customize-templates">Template extensions</a>. By extending or overriding the appearance of the default storefront cart, you can create a unique and visually stunning shopping experience for your customers. Please note that only our default storefront merchants can take benefit from this tool to enhance the presentation of their online store.</p>
    </template>
</SwagLanding>
