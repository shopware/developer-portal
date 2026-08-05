---
sidebar: false
aside: false
page: true
#footer: false
editLink: false
stackOverflowLink: false
prev: false
next: false
feedback: false
items:
  - text: What is Shopware
    link: /what-is-shopware.html
  - text: How to start with Shopware
    link: https://docs.shopware.com/en/shopware-6-en/getting-started
  - text: How to install Shopware
    link: /docs/guides/installation/
  - text: Migrating to Shopware
    link: /migrate-to-shopware.html
---

<script setup>
import SwagGetToKnow from "./components/SwagGetToKnow.vue";
import SwagStartBuilding from "./components/SwagStartBuilding.vue";
import SwagExtendShopware from "./components/SwagExtendShopware.vue";
import SwagContribute from "./components/SwagContribute.vue";
import SwagChangelogWrapper from "./components/SwagChangelogWrapper.vue";
import SwagDiscordCommunity from "./components/SwagDiscordCommunity.vue";
</script>

<!-- HERO -->
<SwagHero class="py-24">
      <template #label>Shopware for developers</template>
      <template #title>Open commerce platform, made easy.</template>
      <template #content><p>Shopware, the leading open commerce platform, helps developers, agencies, and merchants create exceptional online stores. Our API- and app-centric approach, global community, and comprehensive documentation provide the tools and guidance you need to succeed.</p></template>
      <template #links>
        <SwagBtn href="#GetToKnow" class="--primary --sm" icon="long-arrow-right" icon-at="end">Get started</SwagBtn>
        <SwagBtn href="/docs/" class="--primary --subtle --with-border --sm --transparent">View developer docs</SwagBtn>
      </template>
      <template #image><img src="/home/hub-hero-min.png" /></template>
</SwagHero>

<!-- GET TO KNOW SHOPWARE -->
<SwagGetToKnow id="GetToKnow" class="my-20">
  <template #mac-brew>

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

  </template>
  <template #mac-cli>

```bash
brew install --cask shopware/tap/shopware-cli
```

  </template>
  <template #lnx-cli>

```bash
curl -1sLf 'https://dl.cloudsmith.io/public/friendsofshopware/stable/setup.deb.sh' | sudo -E bash
```

```bash
sudo apt install shopware-cli
```

  </template>
  <template #win-wsl>

```bash
wsl --install
```

```bash
wsl
```

```bash
cd ~
```

  </template>
  <template #win-cli>

```bash
sudo apt update && sudo apt install -y curl ca-certificates bash
```

```bash
curl -1sLf 'https://dl.cloudsmith.io/public/friendsofshopware/stable/setup.deb.sh' | sudo -E bash
```

```bash
sudo apt install shopware-cli
```

  </template>
  <template #url-admin>

```txt
http://127.0.0.1:8000/admin
```

  </template>
  <template #url-storefront>

```txt
http://127.0.0.1:8000
```

  </template>
  <template #bash-create>

```bash
shopware-cli project create mystore
```

  </template>
  <template #bash-start>

```bash
cd mystore && make up
```

  </template>
  <template #bash-setup>

```bash
make setup
```

  </template>
</SwagGetToKnow>

<!-- START BUILDING -->
<SwagStartBuilding class="my-20" id="Start" />

<hr class="my-20" />

<!-- EXTEND SHOPWARE -->
<SwagExtendShopware id="Extend" class="my-20" />

<!-- CONTRIBUTE TO SHOPWARE -->
<SwagContribute class="my-20" />

<!-- CHANGELOG --->

<Suspense>
    <SwagChangelogWrapper id="Changelog" class="my-20" />
</Suspense>

<!-- DISCORD -->
<SwagDiscordCommunity />
