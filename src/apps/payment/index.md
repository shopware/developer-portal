<SwagLanding>
    <template #title>Payment</template>
    <template #description>
        <p>Shopware 6 offers a robust <a href="/docs/concepts/commerce/checkout-concept/payments">payment system</a> managing all payment transactions between customers and merchants. The payment handlers integrate seamlessly into the point of sale, allowing customers to pay for their orders using one or multiple payment methods during the checkout process. It also ensures a seamless and hassle-free payment experience, resulting in increased customer satisfaction and a higher likelihood of completed transactions. </p>
        <h1>Capabilities</h1>
    </template>
    <template #image>
        <img src="../../public/landing/apps/payment.jpg" />
    </template>
    <template #exposed2>
        <SwagLandingCardList>
            <template #title>
               Efficient and reliable payments for your store with streamlined processes
            </template>
            <template #cards>
                <SwagLandingCard page="/docs/guides/plugins/apps/payment#synchronous-payments" icon="double-chevron-right-s" icon-type="solid">
                    <template #title>Synchronous payment</template>
                    <template #sub>Smooth transactions - COD and other payment options with synchronous processing.</template>
                </SwagLandingCard>
                <SwagLandingCard page="/docs/guides/plugins/apps/payment#asynchronous-payments" icon="double-chevron-right-s" icon-type="solid">
                    <template #title>Asynchronous payment</template>
                    <template #sub>Seamless integration - Integrate third-party PSP for asynchronous payment with ease.</template>
                </SwagLandingCard>
                <SwagLandingCard page="/docs/guides/plugins/apps/payment#prepared-payments" icon="double-chevron-right-s" icon-type="solid">
                    <template #title>Prepared payment</template>
                    <template #sub>Securely validate - Process credit/debit card payments with Prepared Payments.</template>
                </SwagLandingCard>
                <SwagLandingCard page="/docs/guides/plugins/apps/payment#refund" icon="double-chevron-right-s" icon-type="solid">
                    <template #title>Refund</template>
                    <template #sub>Quick returns - Automatic refund processing for returned items is more easier</template>
                </SwagLandingCard>
                <SwagLandingCard page="/docs/guides/plugins/apps/payment#validation" icon="checkmark" icon-type="solid">
                    <template #title>Payment validations</template>
                    <template #sub>Validation check - Ensure correct signature and response for payment requests.</template>
                </SwagLandingCard>
            </template>
        </SwagLandingCardList>
    <h1>Change the look</h1>
        <p>Shopware allows for complete customization of the payment appearance using <a href="/docs/guides/plugins/plugins/storefront/customize-templates">Template extensions</a>, which enable you to extend or override the default storefront checkout design. It's worth noting that these extensions will only apply to merchants who utilize the default storefront; those who have built their storefronts from scratch may not take advantage of these extensions.</p>
    </template>
</SwagLanding>
