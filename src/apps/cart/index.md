---
editLink: false
swag:
  related: false
---

<script setup>
import SwagLanding from "../../components/SwagLanding.vue";
</script>

<SwagLanding>
    <template #title>Cart</template>
    <template #description>
        <p>A well-designed cart can significantly impact the customer's shopping experience. The cart functionality in Shopware handles all cart operations with ease and efficiency while offering customers a smooth and hassle-free shopping journey. With Shopware's cart, you have the flexibility to customize pricing calculations, add discounts, split cart line items, and even implement custom cart collectors and processors to meet your unique business needs. Want to enhance product experience, boost sales or streamline your checkout process? Our cart feature has got you covered.</p>
        <h1>Capabilities</h1>
    </template>
    <template #exposed>
        <SwagLandingCardList>
            <template #title>
                Get ready to take your online store to the next level with the reliable and feature-rich cart functionality of Shopware.
            </template>
            <template #cards>
                <SwagLandingCard link="/docs/guides/plugins/apps/app-scripts/cart-manipulation#calculating-the-cart">
                    <template #title>Calculate cart</template>
                    <template #sub>Calculate the whole cart and update the total prices</template>
                </SwagLandingCard>
                <SwagLandingCard link="/docs/guides/plugins/apps/app-scripts/cart-manipulation#line-items">
                    <template #title>Modify line items</template>
                    <template #sub>Add/remove line items.</template>
                </SwagLandingCard>
                <SwagLandingCard link="/docs/guides/plugins/apps/app-scripts/cart-manipulation#line-items">
                    <template #title>Calculate discounts</template>
                    <template #sub>Calculate absolute or relative discounts</template>
                </SwagLandingCard>
                <SwagLandingCard link="/docs/guides/plugins/apps/app-scripts/cart-manipulation#price-definitions">
                    <template #title>Define prices</template>
                    <template #sub>Configure net price, gross price and currency dependency</template>
                </SwagLandingCard>
                <SwagLandingCard link="/docs/guides/plugins/apps/app-scripts/cart-manipulation#add-custom-data-to-line-items">
                    <template #title>Add custom data</template>
                    <template #sub> Add custom data to line items</template>
                </SwagLandingCard>
                <SwagLandingCard link="/docs/guides/plugins/apps/app-scripts/cart-manipulation#add-errors-and-notifications-to-the-cart">
                    <template #title>Display errors</template>
                    <template #sub>Block the cart's checkout by raising an error</template>
                </SwagLandingCard>
                <SwagLandingCard link="/docs/guides/plugins/apps/app-scripts/cart-manipulation#add-errors-and-notifications-to-the-cart">
                    <template #title>Generate notifications</template>
                    <template #sub>Add messages using warning and notice to inform the user</template>
                </SwagLandingCard>
                <SwagLandingCard link="/docs/guides/plugins/apps/app-scripts/cart-manipulation#rule-based-cart-scripts">
                    <template #title>Run rule-based scripts</template>
                    <template #sub>Cse the full power of the rule builder to manipulate cart</template>
                </SwagLandingCard>
                <SwagLandingCard link="/docs/guides/plugins/apps/app-scripts/cart-manipulation#rule-based-cart-scripts">
                    <template #title>Cart state</template>
                    <template #sub>Add/fetch cart status whether it is empty or not</template>
                </SwagLandingCard>
            </template>
        </SwagLandingCardList>
    <h1>Change the look</h1>
        <p>You can transform the appearance of your cart with our <a href="/docs/guides/plugins/plugins/storefront/customize-templates">Template extensions</a>. By extending or overriding the appearance of the default storefront cart, you can create a unique and visually stunning shopping experience for your customers. Please note that only our default storefront merchants can take benefit from this tool to enhance the presentation of their online store.</p>
    </template>
</SwagLanding>
