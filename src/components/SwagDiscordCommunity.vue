<template>
  <div class="SwagDiscordCommunity">
    <div class="container">
      <div class="SwagDiscordCommunity_inner-container">
        <img src="/components/discord-logo.png" class="SwagDiscordCommunity_logo" />
        <p class="SwagDiscordCommunity_intro">Join the Shopware Discord Community and connect with more than <span class="font-black">8,000</span> Developers!</p>
        <p>We've got an incredible community waiting for you! Join our Shopware Discord server, where developers from
          around the world come together to share knowledge, insights, and experiences.</p>
        <a href="https://discord.gg/shopware" target="_blank" class="btn --primary mt-4">Join the community channel</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.SwagDiscordCommunity {
  @apply text-center;
  .container {
    @apply flex flex-col items-center;
    max-width: 1440px;
    margin: 0 auto;
    padding-left: 2rem;
    padding-right: 2rem;
    background: radial-gradient(circle at center, var(--vp-c-bg) 16.666%, rgba(0, 0, 0, 0) 100%), url('/components/community.png') center center no-repeat;
  }

  &_inner-container {
    @apply flex flex-col items-center gap-4 py-12 max-w[740px];
  }

  &_intro {
    @apply font-medium text-xl max-w[420px] mt-4;
  }

  &_logo {
    @apply max-w-[5rem] w-full;
  }
}
</style>

<script>
</script>
