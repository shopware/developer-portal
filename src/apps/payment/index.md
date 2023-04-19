<script setup>
import SwagLanding from "../../components/SwagLanding.vue";
import SwagLandingCard from "../../components/SwagLandingCard.vue";
import SwagLandingCardList from "../../components/SwagLandingCardList.vue";
</script>

<SwagLanding>
    <template #title>Payment</template>
    <template #description>
        <p>Shopware 6 offers a robust <a href="/docs/concepts/commerce/checkout-concept/payments">payment system</a> that plays a vital role in the checkout process, managing all payment transactions between customers and merchants. The payment handlers integrate seamlessly into the point of sale, allowing customers to pay for their orders using one or multiple payment methods during the checkout process. It also ensures a seamless and hassle-free payment experience, resulting in increased customer satisfaction and a higher likelihood of completed transactions. With Shopware's payment feature, developers can ensure secure, efficient, and reliable payment processing for their ecommerce stores.</p>
        <h1>Capabilities</h1>
    </template>
    <template #exposed2>
        <SwagLandingCardList>
            <template #title>
                Try our template extensions and elevate your Checkout experience:
            </template>
            <template #cards>
                <SwagLandingCard link="/docs/guides/plugins/apps/payment#synchronous-payments">
                    <template #title>Synchronous payment</template>
                    <template #sub>COD and other easy payments with Synchronous payment</template>
                </SwagLandingCard>
                <SwagLandingCard link="/docs/guides/plugins/apps/payment#asynchronous-payments">
                    <template #title>Asynchronous payment</template>
                    <template #sub>Payment integration of Third-paty PSP with Asynchronous payment</template>
                </SwagLandingCard>
                <SwagLandingCard link="/docs/guides/plugins/apps/payment#prepared-payments">
                    <template #title>Prepared payment</template>
                    <template #sub>Validate credit/debit cards and capture payments with Prepared payments</template>
                </SwagLandingCard>
                <SwagLandingCard link="/docs/guides/plugins/apps/payment#refund">
                    <template #title>Refund</template>
                    <template #sub>Refund payment when item is returned</template>
                </SwagLandingCard>
                <SwagLandingCard link="/docs/guides/plugins/apps/payment#validation">
                    <template #title>Payment validations</template>
                    <template #sub>Validation check for a correct signature and response on payment requests</template>
                </SwagLandingCard>
            </template>
        </SwagLandingCardList>
    <h1>Change the look</h1>
        <p>Shopware allows for complete customization of the payment appearance using <a href="/docs/guides/plugins/plugins/storefront/customize-templates">Template extensions</a>, which enable you to extend or override the default storefront checkout design. It's worth noting that these extensions will only apply to merchants who utilize the default storefront; those who have built their storefronts from scratch may not take advantage of these extensions.</p>
    </template>
</SwagLanding>
