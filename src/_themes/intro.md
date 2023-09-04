# Overview

A theme gives you the ability to change your storefront's visual appearance via SCSS/CSS styling and adjusting twig templates. You can also provide JavaScript with your theme to change how the storefront behaves in the browser. For example, JavaScript is used in Shopware to open the offcanvas shopping cart. 

Shopware has a default theme to make things easier. It is built on top of Bootstrap 4, style-wise. So everything you can do with Bootstrap, you can do with the Shopware Storefront as well.

Another handy capability is the theme configuration. As a theme developer, you can define variables the shop owner in the Administration can configure. Those variables are accessible in your theme and let you implement powerful features.

## Apps vs Plugins vs Themes

A theme is a special type of plugin or app aimed at easily changing the visual appearance of your Storefront. If you want to get more information about this, check out the Plugin Base Guide and App Base Guide.

There are several ways to change the appearance of your Storefront. Here is one such usage: Say, a regular plugin or app whose primary purpose is to add new functions and change the behavior of the shop might also contain SCSS/CSS and JavaScript to be able to embed their new features into the Storefront.

Technically a theme can be a plugin or app, and it will be visible in the theme manager once it is activated and can be assigned to a specific sales channel, while plugins or apps are activated globally. 

To distinguish a theme from a regular plugin or app, you need to implement the Interface `Shopware\Storefront\Framework\ThemeInterface`. A theme can also inherit from other themes, overwrite the default configuration (colors, fonts, media) and add new configuration options.

You do not need to write any PHP code in a theme. If you need PHP code, you should choose a plugin instead. Another important distinction to themes is, the themes are specific for a sales channel and have to be assigned to them to take effect; the other way around, plugins and apps have a global effect on the Shopware installation.

## Next steps

Now that you have learned the differences, you can create your first one.