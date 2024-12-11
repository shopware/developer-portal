<template>
    <PageRef
        v-if="route.path.startsWith('/docs/v6.7')"
        class="SwagOutdatedVersion my-8"
        :page="canonicalUrl"
        title="You are viewing next version (v6.7) of the documentation."
        sub="Click here to switch to the stable version (v6.6), or use the version switcher on the left to navigate between versions." />
    <PageRef
        v-else-if="route.path.startsWith('/docs/v6.')"
        class="SwagOutdatedVersion my-8"
        :page="canonicalUrl"
        title="You are viewing outdated version of the documentation."
        sub="Click here to switch to the stable version (v6.6), or use the version switcher on the left to navigate between versions." />
</template>

<script setup lang="ts">
import { useRoute } from "vitepress";
import { ref, watch } from "vue"

const route = useRoute()
const canonicalUrl = ref('')

watch(
    () => route,
    (route) => {
        if (!route.path.startsWith('/docs/v6')) {
            canonicalUrl.value = ''
            return
        }
        const [ emptyPrefix, docs, version, ...rest ] = route.path.split('/')
        canonicalUrl.value = `/${docs}/${rest.join('/')}`
    },
    {
        immediate: true,
    }
)
</script>

<style lang="scss">
.SwagOutdatedVersion {
    outline: 3px var(--sw-c-blue-vivacious) solid;
}
</style>