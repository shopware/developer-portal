<template>
    <PageRef
        v-if="route.path.startsWith('/docs/v6.7')"
        class="SwagOutdatedVersion my-8"
        page="/docs/"
        title="You are viewing next version (v6.7) of the documentation."
        sub="Click here to switch to the stable (v6.6) version, or use the version switcher on the left to navigate between versions." />
    <PageRef
        v-else-if="route.path.startsWith('/docs/v6.')"
        class="SwagOutdatedVersion my-8"
        page="/docs/"
        title="You are viewing outdated version of the documentation."
        sub="Click here to switch to the stable (v6.6) version, or use the version switcher on the left to navigate between versions." />
</template>

<script setup lang="ts">
import { useRoute } from "vitepress";

const route = useRoute()
</script>

<style lang="scss">
.SwagOutdatedVersion {
    outline: 3px var(--sw-c-blue-vivacious) solid;
}
</style>