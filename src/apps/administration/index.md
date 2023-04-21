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
    <template #im>
        <img src="/landing/apps/admin.PNG"/>
    </template>
    <template #exposed2>
        <SwagLandingCardList>
            <template #title>
                Explore the possibilities you can use to extens your Administration component
            </template>
            <template #cards>
                <SwagLandingCard link="/docs/guides/plugins/apps/administration/add-custom-modules">
                    <template #title>Define features</template>
                    <template #sub>Customize platform - Define catalog, order settings, etc. with modules.</template>
                    <template #icon>
                      <div>
                        <HeroIcons.TagIcon class="h-10 w-10 text-blue-500" />
                     </div>
                    </template>
                </SwagLandingCard>
                <SwagLandingCard link="/docs/guides/plugins/apps/administration/add-custom-action-button">
                    <template #title>Add action button</template>
                    <template #sub>Maximize navigation - Action buttons guide customers through your store.</template>
                    <template #icon>
                      <div>
                        <HeroIcons.StopCircleIcon class="h-10 w-10 text-blue-500" />
                     </div>
                    </template>
                </SwagLandingCard>
                <SwagLandingCard link="/docs/guides/plugins/apps/custom-data/custom-fields">
                    <template #title>Add custom fields</template>
                    <template #sub>Complete customization - Add your own fields to data records.</template>
                    <template #icon>
                      <div>
                        <HeroIcons.BarsArrowUpIcon class="h-10 w-10 text-blue-500" />
                     </div>
                    </template>
                </SwagLandingCard>
                <SwagLandingCard link="/docs/guides/plugins/apps/custom-data/custom-entities">
                    <template #title>Create custom entities</template>
                    <template #sub>Unlimited possibilities - Add your own entities for full customization.</template>
                    <template #icon>
                      <div>
                        <HeroIcons.DocumentPlusIcon class="h-10 w-10 text-blue-500" />
                     </div>
                    </template>
                </SwagLandingCard>
                <SwagLandingCard link="/docs/guides/plugins/apps/administration/add-custom-action-button#providing-feedback-in-the-administration">
                    <template #title>Send notification</template>
                    <template #sub>Enhance efficiency - Trigger actions in Admin for faster workflow.</template>
                    <template #icon>
                      <div>
                        <HeroIcons.FlagIcon class="h-10 w-10 text-blue-500" />
                     </div>
                    </template>
                </SwagLandingCard>
            </template>
        </SwagLandingCardList>
    <h1>Change the look</h1>
        <p>Shopware provides the capability to <a href="/docs/guides/plugins/apps/administration/add-custom-modules#admin-design-compatibility">modify the appearance</a> of the administration panel, allowing you to incorporate design customization and enhance the look and feel to improve user experience.</a></p>
    </template>
</SwagLanding>
