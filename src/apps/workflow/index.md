<script setup>
import SwagLanding from "../../components/SwagLanding.vue";
import SwagLandingCard from "../../components/SwagLandingCard.vue";
import SwagLandingCardList from "../../components/SwagLandingCardList.vue";
</script>

<SwagLanding>
    <template #title>Workflow</template>
    <template #description>
        <p>Workflow automates operations of your e-commerce business like checkout process, order transaction, email marketing, document generation, etc., which helps streamline operations, improve efficiency, and boost revenue. Overall, workflow automation is a powerful tool for your businesses.</p>
        <h1>Capabilities</h1>
    </template>
    <template #exposed2>
        <SwagLandingCardList>
            <template #title>
                Shopware offers Flow Builder as an automation solution to automate business processes. One can:
            </template>
            <template #cards>
                <SwagLandingCard link="/docs/guides/plugins/apps/flow-builder/add-custom-flow-actions-from-app-system">
                    <template #title>Build Workflow</template>
                    <template #sub>Workflow triggers are events that cause a workflow to run. Hence, to create automation, you need to build a workflow using components called triggers, rules, and actions.</template>
                </SwagLandingCard>
                <SwagLandingCard link="/docs/guides/plugins/apps/app-base-guide#webhooks">
                    <template #title>Create Webhooks</template>
                    <template #sub>You can send data about events on the server to a web application using webhooks. This is to say that apps offer the possibility to deliver their own flow actions via webhooks. With webhooks, you can subscribe to events occurring in Shopware.</template>
                </SwagLandingCard>
                <SwagLandingCard link="/docs/guides/plugins/plugins/checkout/document/add-custom-document-type#adding-a-generator">
                    <template #title>Generate documents</template>
                    <template #sub>Document generation automatically creates typical documents used within a business, such as invoices, contracts, order cancellations, and more. These document templates can be customized to have different brand names or personalized marketing messages on invoice templates with a PDF generator.  You can also send this generated document via e-mail out of the flow.</template>
                </SwagLandingCard>
                <SwagLandingCard link="/docs/guides/plugins/apps/rule-builder">
                    <template #title>Define Rule builder</template>
                    <template #sub>With the rules you can also configure your store conditions like advanced prices or promotions. Allows users to create and manage workflow rules or business events without the need for programming skills. Rule builders typically provide a visual interface that makes it easy for users to define the conditions and actions that should be triggered as part of a workflow process.</template>
                </SwagLandingCard>
            </template>
        </SwagLandingCardList>
    </template>
</SwagLanding>
