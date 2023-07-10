<template>
  <div class="SwagChangelog divide-y-1 divide-x-1 divide-gray-400">
    <div class="SwagChangelog_item divide-y-1 divide-x-1 divide-gray-400"
         v-for="log in changelog">
      <span class="SwagChangelog_version">v{{ log.version }}</span>
      <div>
        <span class="SwagChangelog_label"
              :class="`--type-${log.type}`"
              v-if="log.label">{{ log.label }}</span>
        <span class="SwagChangelog_date">{{ log.date }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.SwagChangelog {
  @apply grid gap-2;
  &_item {
    @apply flex justify-between items-center gap-2;
  }
  &_version {
    @apply font-normal text-lg text-black;
    .dark & {
      @apply text-white;
    }
  }
  &_date {
    @apply rounded-sm text-xs px-2 py-1;
    background-color: var(--sw-c-gray-100);
    color: var(--sw-c-gray-dark-100);
    .dark & {
      background-color: var(--sw-c-gray-dark-600);
      color: var(--sw-c-gray-600);
    }
  }
  &_label {
    @apply text-xs px-2 py-1;
    &.--type-rc {
      background-color: var(--sw-c-blue-vivacious-100);
      color: var(--sw-c-blue-vivacious-900);
      .dark & {
        background-color: var(--sw-c-blue-vivacious-900);
        color: var(--sw-c-blue-vivacious-50);
      }
    }
    &.--type-security {
      background-color: var(--sw-c-pink-100);
      color: var(--sw-c-pink-900);
      .dark & {
        background-color: var(--sw-c-pink-900);
        color: var(--sw-c-pink-50);
      }
    }
  }
}
</style>

<script setup lang="ts">
const changelog = [
  {
    version: '6.5.1.1',
    date: '2023-05-31 09:53',
  },
  {
    version: '6.5.1.0',
    date: '2023-05-24 15:51',
  },
  {
    version: '6.4.20.2',
    date: '2023-05-05 07:55',
    label: 'Security update',
    type: 'security',
  },
  {
    version: '6.5.0.0',
    date: '2023-05-03 10:28',
  },
  {
    version: '6.4.20.1',
    date: '2023-04-17 19:20',
    label: 'Security update',
    type: 'security',
  },
  {
    version: '6.5.0.0-rc4',
    date: '2023-04-11 15:13',
    label: 'Release candidate',
    type: 'rc',
  }
].map(log => {
  const date = new Date(log.date);
  log.date = `${date.toLocaleDateString()} ${date.toLocaleTimeString(undefined, {
    hour: '2-digit',
    minute:'2-digit'
  })}`;
  return log;
});
// const changelog = await (await fetch('https://www.shopware.com/en/changelog/?rss=1', {mode: 'no-cors'})).json();
</script>