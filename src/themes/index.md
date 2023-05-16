---
items:
  - text: Getting started
    link: /themes/
  - text: Themes overview
    link: /themes/intro
  - text: Areas
    items:
      - text: Build theme
        link: /docs/guides/plugins/themes/create-a-theme
      - text: Configuration
        collapsed: true
        items:
          - text: Theme configuration
            link: /docs/guides/plugins/themes/theme-configuration    
          - text: Inheritance
            link: /docs/guides/plugins/themes/add-theme-inheritance
          - text: Inheritance configuration
            link: /docs/guides/plugins/themes/theme-inheritance-configuration
      - text: Templates
        link: /docs/guides/plugins/plugins/storefront/customize-templates.html
      - text: Styling
        collapsed: true
        items:
          - text: SCSS/CSS
            link: /docs/guides/plugins/themes/add-css-js-to-theme
          - text: Theme with bootstrap styling
            link: /docs/guides/plugins/themes/add-theme-inheritance-without-resources
          - text: Override bootstrap variables
            link: /docs/guides/plugins/themes/override-bootstrap-variables-in-a-theme
      - text: Assets
        collapsed: true
        items:
          - text: Javascript
            link: /docs/guides/plugins/themes/add-css-js-to-theme.html#adding-custom-js
          - text: Icons
            link: /docs/guides/plugins/themes/add-icons
          - text: Images
            link: /docs/guides/plugins/themes/add-assets-to-theme
  - text: Reference
    items:
      - text: Twig functions
        link: /docs/resources/references/storefront-reference/twig-function-reference
      - text: Data Loading
        link: /docs/guides/plugins/apps/app-scripts/data-loading
aside: false
head:
  - - meta
    - property: 'og:image'
      content: https://shopware-docs-og.vercel.app/api/og?title=Themes
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
        <PageRef page="/docs/guides/plugins/themes/theme-base-guide.html" title="Start building a theme" />
    </template>
    <template #exposed>
        <SwagLandingCardList>
            <template #title>Starter guides</template>
            <template #description>
                Here is a handful of tutorials to follow along that make you familiar with some of our concepts:
            </template>
            <template #cards>
                <SwagLandingCard page="/docs/guides/plugins/themes/theme-configuration">
                    <template #title>Theme configuration</template>
                    <template #sub>Add options to your theme, so merchants can customize it to their needs.</template>
                </SwagLandingCard>
                <SwagLandingCard page="/docs/guides/plugins/themes/add-assets-to-theme">
                    <template #title>Add custom assets</template>
                    <template #sub>Learn how to add custom styles, scripts, and assets to your theme.</template>
                </SwagLandingCard>
                <SwagLandingCard page="/docs/guides/plugins/themes/add-theme-inheritance">
                    <template #title>Theme inheritance</template>
                    <template #sub>Build a family of themes that inherit from each other, so you can focus on building a solid foundation for all your custom projects.</template>
                </SwagLandingCard>
            </template>
        </SwagLandingCardList>
    </template>
</SwagLanding>