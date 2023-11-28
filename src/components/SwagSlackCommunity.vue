<template>
  <div class="SwagSlackCommunity">
    <div class="container">
      <div class="SwagSlackCommunity_inner-container">
        <img src="/components/slack-logo.png" />
        <p class="SwagSlackCommunity_intro">Join the Shopware Slack Community and connect with more than <span class="font-black">8,000</span> Developers!</p>
        <p>We've got an incredible community waiting for you! Join our Shopware Slack workspace, where developers from
          around the world came together to share knowledge, insights, and experiences.</p>
        <a href="https://shopwarecommunity.slack.com/" target="_blank" class="btn --primary mt-4">Join the community channel</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.SwagSlackCommunity {
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
}
</style>

<script>
</script>