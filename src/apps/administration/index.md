# Administration Overview

The Administration is the merchant interface of every Shopware store. It comprises UI for business logic, purchasing logic, data, and capabilities. It outlines all internal processes like product inventory tracking, order processing, and customer record management and gets input from frontend applications.

The [Administration](https://developer.shopware.com/docs/concepts/framework/architecture/administration-concept) contains framework, component and assets defined and used in the Administration user interface.

You can modify the appearance and extend capabilities of the Administration by customizing its components such as [template files](https://developer.shopware.com/docs/guides/plugins/plugins/administration/writing-templates), [mixins](https://developer.shopware.com/docs/guides/plugins/plugins/administration/add-mixins), [action button](https://developer.shopware.com/docs/guides/plugins/apps/administration/add-custom-action-button), [filters](https://developer.shopware.com/docs/guides/plugins/plugins/administration/add-filter), [modules](https://developer.shopware.com/docs/guides/plugins/apps/administration/add-custom-modules), [styling](https://developer.shopware.com/docs/guides/plugins/plugins/administration/add-custom-styles), etc.

All these can be done via [apps](https://developer.shopware.com/docs/guides/plugins/apps/administration) or [plugins](https://developer.shopware.com/docs/guides/plugins/plugins/administration).

## Rules

You can create [custom rules](https://developer.shopware.com/docs/guides/plugins/plugins/framework/rule/add-custom-rules) to handle almost anything ecommerce-related for the customer, product or cart. It gives you control over what has to happen if a specific condition is fulfilled.

## Flow Builder

[Flow Builder](https://developer.shopware.com/docs/guides/plugins/plugins/framework/flow/add-flow-builder-action#add-custom-action-in-administration) lets you build workflow to automate a business process.

## Admin API

Extending the Administration component also involves creating necessary API interfaces and services.

To provide CRUD operations for every entity within Shopware, the [Admin API](https://developer.shopware.com/docs/concepts/api/admin-api) offers a full range of commerce options making it possible for an ecommerce business to handle backend data.

## Code and Test

Coding standards, like for many large projects, Shopware Open Source also has [coding standards](https://developer.shopware.com/docs/resources/guidelines/code). Use these standards when you contribute to the codebase or create extensions.

Every core component, module, and plugin created should have a set of unit tests. Writing tests will ensure that your written code works and that another change can't break your code's functionality with their code. We are using [JestJS](https://developer.shopware.com/docs/guides/plugins/plugins/testing/jest-admin) as our testing framework, a solid foundation and widely used by many developers.
