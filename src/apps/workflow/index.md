<script setup>
import SwagLanding from "../../components/SwagLanding.vue";
import SwagLandingCard from "../../components/SwagLandingCard.vue";
import SwagLandingCardList from "../../components/SwagLandingCardList.vue";
import * as HeroIcons from "@heroicons/vue/24/solid";
</script>

<SwagLanding>
    <template #title>Workflow</template>
    <template #description>
        <p>Workflow automates operations of your e-commerce business like checkout process, order transaction, email marketing, document generation, etc., which helps streamline operations, improve efficiency, and boost revenue. Overall, workflow automation is a powerful tool for your businesses.</p>
        <h1>Capabilities</h1>
    </template>
    <template #im>
        <img src="/landing/apps/workflow.PNG"/>
    </template>
    <template #exposed2>
        <SwagLandingCardList>
            <template #title>
                Shopware offers Flow Builder as an automation solution to automate business processes.
            </template>
            <template #cards>
                <SwagLandingCard link="/docs/guides/plugins/apps/flow-builder/add-custom-flow-actions-from-app-system">
                    <template #title>Build Workflow</template>
                    <template #sub>Automate processes - Create workflows with easy-to-use trigger, rule, and action components.</template>
                    <template #icon>
                        <HeroIcons.AdjustmentsVerticalIcon class="h-10 w-10 text-blue-500" />
                    </template>
                </SwagLandingCard>
                <SwagLandingCard link="/docs/guides/plugins/apps/app-base-guide#webhooks">
                    <template #title>Create Webhooks</template>
                    <template #sub>Stay in the loop - Webhooks delivers real-time event updates.</template>
                    <template #icon>
                        <HeroIcons.LinkIcon class="h-10 w-10 text-blue-500" />
                    </template>
                </SwagLandingCard>
                <SwagLandingCard link="/docs/guides/plugins/plugins/checkout/document/add-custom-document-type#adding-a-generator">
                    <template #title>Generate documents</template>
                    <template #sub>Effortlessly create and personalize - Business documents generation feature.</template>
                    <template #icon>
                        <HeroIcons.DocumentIcon class="h-10 w-10 text-blue-500" />
                    </template>
                </SwagLandingCard>
                <SwagLandingCard link="/docs/guides/plugins/apps/rule-builder">
                    <template #title>Rule builder</template>
                    <template #sub>Take control of your store - Configure conditions and rules as per business agenda.</template>
                    <template #icon>
                        <HeroIcons.Bars4Icon class="h-10 w-10 text-blue-500" />
                    </template>
                </SwagLandingCard>
            </template>
        </SwagLandingCardList>
    </template>
</SwagLanding>
