---
sidebar: false
aside: false
swag:
  related: false
layout: page
---

<script setup>
import SwagCopilot from "@node_modules/vitepress-shopware-docs/src/shopware/components/copilot/SwagCopilot.vue";
import render from "./components/markdown";
</script>

<SwagCopilot class="--inline" :render="render" collection="shopware--developer-portal--main" />