---
items:
  - text: Themes
    link: /themes/
  - text: Concept
    link: /themes/concept
  - text: Quick start guide
    link: /themes/quick-start-guide
  - text: Guides
    items:
      - text: Configuration
        link: /docs/guides/plugins/themes/theme-configuration
      - text: Styling
        link: /docs/guides/plugins/themes/add-theme-inheritance-without-resources
      - text: Assets
        link: /docs/guides/plugins/themes/add-assets-to-theme
      - text: Inheritance
        link: /docs/guides/plugins/themes/theme-inheritance-configuration
  - text: Reference
    items:
      - text: Twig Functions
        link: /docs/resources/references/storefront-reference/twig-function-reference
      - text: Data Loading
        link: /docs/guides/plugins/apps/app-scripts/data-loading
  - text: Themes Store
    items:
      - text: Publish your Theme
        link: /themes/store/publish-yourtheme
      - text: Guidelines
        link: /docs/resources/guidelines/testing/store
aside: false
head:
  - - meta
    - property: 'og:image'
      content: https://shopware-docs-og.vercel.app/api/og?title=Themes
---

<SwagLanding image="/landing/themes.png">
    <template #title>Craft beautiful themes that inspire</template>
    <template #description>
        Themes allow merchants transport their brand and identity. They are the way they present their products and services. Explore all the possibilities and tools at hand.
    </template>
    <template #ctas>
        <PageRef page="/docs/guides/plugins/themes/theme-base-guide.html" title="Start building a theme" />
    </template>
    <template #exposed>
        <SwagLandingCardList>
            <template #cards>
                <SwagLandingCard page="/docs/guides/plugins/themes/theme-configuration">
                    <template #title>Theme configuration</template>
                    <template #sub>Add options to your theme, so merchants can customize it to their needs.</template>
                </SwagLandingCard>
                <SwagLandingCard page="/docs/guides/plugins/themes/add-assets-to-theme">
                    <template #title>Add custom assets</template>
                    <template #sub>Learn how to add custom styles, scripts and assets to your theme.</template>
                </SwagLandingCard>
                <SwagLandingCard page="/docs/guides/plugins/themes/add-theme-inheritance">
                    <template #title>Theme inheritance</template>
                    <template #sub>Build a family of themes that inherit from each other, so you can focus on building a solid foundation for all your custom projects.</template>
                </SwagLandingCard>
            </template>
        </SwagLandingCardList>
    </template>
</SwagLanding>