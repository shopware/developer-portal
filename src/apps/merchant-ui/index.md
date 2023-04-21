<script setup>
import SwagLanding from "../../components/SwagLanding.vue";
import SwagLandingCard from "../../components/SwagLandingCard.vue";
import SwagLandingCardList from "../../components/SwagLandingCardList.vue";
</script>

<SwagLanding>
    <template #title>Administration</template>
    <template #description>
        <p>Shopware's administration manages all aspects of your store. It outlines all internal processes like product inventory tracking, order processing, customer record management, etc. The Administration component is tightly coupled with Shopware's core, which helps to manage administrative activities.</p>
        <h1>Capabilities</h1>
    </template>
    <template #exposed2>
        <SwagLandingCardList>
            <template #title>
                Try our template extensions and elevate your Checkout experience:
            </template>
            <template #cards>
                <SwagLandingCard link="/docs/guides/plugins/apps/administration/add-custom-modules">
                    <template #title>Define features</template>
                    <template #sub>Define features like catalog, orders, customers, settings, etc with modules</template>
                    <template #icon>
                      <div>
                        <HeroIcons.TagIcon class="h-10 w-10 text-blue-500" />
                     </div>
                    </template>
                </SwagLandingCard>
                <SwagLandingCard link="/docs/guides/plugins/apps/administration/add-custom-action-button">
                    <template #title>Add action button</template>
                    <template #sub>An action button on your store lets the customer take action and navigates through the store like "Buy Now", "Add to Cart", etc.</template>
                    <template #icon>
                      <div>
                        <HeroIcons.ComputerDesktopIcon class="h-10 w-10 text-blue-500" />
                     </div>
                    </template>
                </SwagLandingCard>
                <SwagLandingCard link="/docs/guides/plugins/apps/custom-data/custom-fields">
                    <template #title>Add custom fields</template>
                    <template #sub>Do you want to evaluate taxes?</template>
                    <template #icon>
                      <div>
                        <HeroIcons.ComputerDesktopIcon class="h-10 w-10 text-blue-500" />
                     </div>
                    </template>
                </SwagLandingCard>
                <SwagLandingCard link="/docs/guides/plugins/apps/custom-data/custom-entities">
                    <template #title>Create custom entities</template>
                    <template #sub>Use the full power of the rule builder to manipulate checkout</template>
                    <template #icon>
                      <div>
                        <HeroIcons.ComputerDesktopIcon class="h-10 w-10 text-blue-500" />
                     </div>
                    </template>
                </SwagLandingCard>
                <SwagLandingCard link="/docs/guides/plugins/apps/administration/add-custom-action-button#providing-feedback-in-the-administration">
                    <template #title>Send notification</template>
                    <template #sub>Trigger an action inside the Administration itself to send regarding the status of action, opening new tab, reload page, etc</template>
                    <template #icon>
                      <div>
                        <HeroIcons.ComputerDesktopIcon class="h-10 w-10 text-blue-500" />
                     </div>
                    </template>
                </SwagLandingCard>
            </template>
        </SwagLandingCardList>
    <h1>Change the look</h1>
        <p><a href="/docs/guides/plugins/apps/administration/add-custom-modules#admin-design-compatibility">You can modify the appearance and styling of the Administration too</a></p>
    </template>
</SwagLanding>
