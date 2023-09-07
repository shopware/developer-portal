---
_items:
  - text: Getting started
    link: /themes/
  - text: Themes overview
    link: /themes/intro
  - text: Areas
    items:
      - text: Build theme
        link: /docs/guides/plugins/themes/create-a-theme
      - text: Configure theme
        collapsed: true
        items:
          - text: Theme configuration
            link: /docs/guides/plugins/themes/theme-configuration    
          - text: Inheritance
            link: /docs/guides/plugins/themes/add-theme-inheritance
          - text: Inheritance configuration
            link: /docs/guides/plugins/themes/theme-inheritance-configuration
      - text: Style theme
        collapsed: true
        items:
          - text: SCSS/CSS
            link: /docs/guides/plugins/themes/add-css-js-to-theme
          - text: Theme with bootstrap styling
            link: /docs/guides/plugins/themes/add-theme-inheritance-without-resources
          - text: Override bootstrap variables
            link: /docs/guides/plugins/themes/override-bootstrap-variables-in-a-theme
      - text: Embed JS styling
        link: /docs/guides/plugins/themes/add-css-js-to-theme.html#adding-custom-js
      - text: Add assets
        collapsed: true
        items:
          - text: Custom assets
            link: /docs/guides/plugins/themes/add-assets-to-theme
          - text: Icons
            link: /docs/guides/plugins/themes/add-icons
      - text: Cutomize templates
        link: /docs/guides/plugins/plugins/storefront/customize-templates
  - text: Reference
    items:
      - text: Twig functions
        link: /docs/resources/references/storefront-reference/twig-function-reference
      - text: Data Loading
        link: /docs/guides/plugins/apps/app-scripts/data-loading
  - text: Themes Store
    items:
      - text: Guidelines
        link: /docs/resources/guidelines/testing/store/quality-guidelines-apps/
aside: false
sidebar: false
swag:
  related: false
---

<SwagLanding image="/landing/themes.png">
    <template #title>Craft beautiful themes that inspire</template>
    <template #description>
        <p>Themes allow merchants to transport their brand and identity. They are the way they present their products and services. Create a theme and sell it in the store so that merchants can use it in their stores.</p>
        <p>Shopware's theme system is based on twig and an inheritance mechanism, so you can write individual themes without breaking Shopware's core functionalities.</p>
    </template>
    <template #ctas>
        <PageRef page="/docs/guides/plugins/themes/theme-base-guide.html" title="Start building a theme" sub="Learn how to set up a theme for your storefront from scratch." />
    </template>
    <template #exposed>
        <SwagLandingCardList>
            <template #title>Starter guides</template>
            <template #description>
                Here is a handful of tutorials to follow along that make you familiar with some of our concepts:
            </template>
            <template #cards>
                <PageRef page="/docs/guides/plugins/themes/theme-configuration">
                    <template #title>Theme configuration</template>
                    <template #sub>Add options to your theme, so merchants can customize it to their needs.</template>
                </PageRef>
                <PageRef page="/docs/guides/plugins/themes/add-assets-to-theme">
                    <template #title>Add custom assets</template>
                    <template #sub>Learn how to add custom styles, scripts, and assets to your theme.</template>
                </PageRef>
                <PageRef page="/docs/guides/plugins/themes/add-theme-inheritance">
                    <template #title>Theme inheritance</template>
                    <template #sub>Build a family of themes that inherit from each other for all your custom projects.</template>
                </PageRef>
            </template>
        </SwagLandingCardList>
        <SwagLandingCardList>
            <template #title>Highlights</template>
            <template #description>
                Themes in Shopware serve a crucial role in defining the visual and structural appearance of your online store. They determine how your e-commerce website looks to your customers and how it presents your products and content. Here are the primary functions and aspects of themes in Shopware:
            </template>
            <div class="grid gap-8">
                <div class="grid md:grid-cols-2 gap-8">
                    <SwagCardSummary icon="boxes">
                        <template #title>Build and configure theme</template>
                        <ul>
                            <li><a href="/docs/guides/plugins/themes/create-a-theme">Create plugin based theme</a></li>
                            <li><a href="/docs/guides/plugins/themes/theme-configuration">Theme configuration</a></li>
                            <li><a href="/docs/guides/plugins/themes/theme-inheritance-configuration">Inherit theme configurations</a></li>
                        </ul>
                    </SwagCardSummary>
                    <SwagCardSummary icon="figma">
                        <template #title>Style theme</template>
                        <ul>
                            <li><a href="/docs/guides/plugins/themes/add-css-js-to-theme">SCSS/CSS</a></li>
                            <li><a href="/docs/guides/plugins/themes/add-theme-inheritance-without-resources">Theme with bootstrap styling</a></li>
                            <li><a href="/docs/guides/plugins/themes/override-bootstrap-variables-in-a-theme">Override bootstrap variables</a></li>
                        </ul>
                    </SwagCardSummary>
                </div>
                <div class="grid md:grid-cols-3 gap-8">
                    <SwagCardSummary icon="dashboard">
                        <template #title>Embed JS styling</template>
                        <ul>
                            <li><a href="/docs/guides/plugins/themes/add-css-js-to-theme.html#adding-custom-js">Add custom JS</a></li>
                        </ul>
                    </SwagCardSummary>
                    <SwagCardSummary icon="flow">
                        <template #title>Add assets</template>
                        <ul>
                            <li><a href="/docs/guides/plugins/themes/add-assets-to-theme">Custom Assets</a></li>
                            <li><a href="/docs/guides/plugins/apps/payment#asynchronous-payments">Icons</a></li>
                        </ul>
                    </SwagCardSummary>
                    <SwagCardSummary icon="image-text">
                        <template #title>Templates</template>
                        <ul>
                            <li><a href="/docs/guides/plugins/plugins/storefront/customize-templates">Add custom templates</a></li>
                        </ul>
                    </SwagCardSummary>
                </div>
            </div>
        </SwagLandingCardList>
    </template>
</SwagLanding>
