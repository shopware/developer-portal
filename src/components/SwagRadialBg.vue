<template>
  <div class="SwagRadialBg" v-show="route.path === '/'">
    <div class="SwagRadialBg_left"></div>
    <div class="SwagRadialBg_middle"></div>
    <div class="SwagRadialBg_right"></div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vitepress";

const route = useRoute();
</script>

<style lang="scss">
body:has(.SwagRadialBg) .VPContent {
  background-color: transparent;
}

.SwagRadialBg {
  height: 66vh;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  z-index: -1;
  overflow: hidden;
  /*background-image:
      radial-gradient(
              ellipse  at 200px 50px,
              rgba(8, 112, 255, 1),
              rgba(255, 255, 255, 0)
      ),
      radial-gradient(
              ellipse  at -200px 50px,
              rgba(115, 99, 229, 1),
              rgba(255, 255, 255, 0)
      ),
      radial-gradient(
              ellipse  at 200px 50px,
              rgba(22, 179, 32, 1),
              rgba(255, 255, 255, 0)
      );*/
  &_left,
  &_middle,
  &_right {
    position: absolute;
    /*border-radius: 50%;
    backdrop-filter: blur(100px);*/
    background-size: contain;
  }
  &_left,
  &_right {
    top: -20%;
  }
  &_left {
    right: 40%;
    width: 100%;
    height: 100%;
    background-image:
        radial-gradient(
                ellipse,
                rgba(8, 112, 255, 0.2) 0%,
                rgba(255, 255, 255, 0) 66%,
                transparent 100%
        );
  }

  &_middle {
    left: 17%;
    top: 0%;
    width: 66%;
    height: 66%;
    background-image:
        radial-gradient(
                ellipse,
                rgba(115, 99, 229, 0.2) 0%,
                rgba(255, 255, 255, 0) 66%,
                transparent 100%
        );
  }

  &_right {
    left: 40%;
    width: 100%;
    height: 100%;
    background-image:
        radial-gradient(
                ellipse,
                rgba(22, 179, 32, 0.2) 0%,
                rgba(255, 255, 255, 0) 66%,
                transparent 100%
        );
  }
}
.SwagHero {
  &--developer {
    /*opacity: 0.5;
    background: rgba(8, 112, 255, 0.30);

    opacity: 0.10000000149011612;
    background: #7363E5;

    opacity: 0.10000000149011612;
    background: rgba(22, 179, 32, 0.80);*/

    opacity: 1;
  }
  &--designer {
    opacity: 0.5;
    background: rgba(118, 230, 205, 0.30);

    opacity: 0.10000000149011612;
    background: rgba(109, 117, 234, 0.90);

    opacity: 0.10000000149011612;
    background: rgba(24, 192, 244, 0.50);
  }
}
</style>