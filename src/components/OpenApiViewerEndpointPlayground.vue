<template>
  <div class="grid gap-4 w-full">

    <div class="bg-black text-white">
      <p>Headers</p>
      <p>GET parameters</p>
      <p>POST parameters</p>
      <p>JSON body</p>
      <p>Host selector</p>


      <div class="grid">
        <div>
          <SwagInput type="number"/>
          <SwagInput type="text"/>
        </div>
      </div>
    </div>

    <div>

      <b>HTTP</b>
      {{ samples.http }}

      <b>CURL</b>
      {{ samples.curl }}

      <b>wget</b>
      {{ samples.wget }}

      <b>PHP (guzzle)</b>
      {{ makeHighlight('php', samples.phpGuzzle) }}

    </div>

  </div>
</template>

<script setup lang="ts">
import {computed} from "vue";
import {SwagInput} from "vitepress-shopware-docs";
import * as Samples from "./openApi/sample";

//import {highlight} from "vitepress/src/node/markdown/plugins/highlight";

const props = defineProps({
  endpoint: {
    required: true,
  }
});

const makeHighlight = (lang, code) => {
  return '';
  //return highlight();
}

const samples = computed(() => {
  return {
    http: new Samples.HTTP(props.endpoint.path, props.endpoint.method).getCode(),
    curl: new Samples.CURL(props.endpoint.path, props.endpoint.method).getCode(),
    wget: new Samples.Wget(props.endpoint.path, props.endpoint.method).getCode(),
    phpGuzzle: new Samples.PHPGuzzle(props.endpoint.path, props.endpoint.method).getCode(),
  };
});
</script>