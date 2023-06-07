<template>
  <div class="py-10 flex flex-col gap-6 text-center items-center justify-center max-w-800px mx-auto c-outflow --gradient">
    <h3>Stay up to date</h3>
    <p class="text-subtle font-normal">Subscribe to our Developer Newsletter and be the first to be informed about product releases, updates, security notices, the Shopware Academy, and other important developer topics.</p>

    <div class="max-w-360px flex flex-col gap-6 text-subtle text-left items-center justify-center text-sm">
      <SwagInput type="email" />
      <SwagCheckbox class="self-start">Agree to data protection *</SwagCheckbox>
      <p class="text-sm">You can find information on how we process your personal data in our <a href="#">privacy notice</a>. Insofar as my consent is required for the use of this data, I consent to the use of my data in accordance with the declaration of consent contained in our privacy notice.</p>
      <button type="button" class="btn --primary">Subscribe now</button>
    </div>

    <div id="SwagNewsletter_Form" class="text-subtle"></div>

  </div>
</template>

<style lang="scss">
.hs-richtext {
  @apply text-sm;
}

#SwagNewsletter_Form {
  form {
    @apply max-w-360px flex flex-col gap-6 text-left items-center justify-center text-sm;
  }

  .hs-email {
    @apply w-full;
  }
}
</style>

<script setup lang="ts">
import SwagInput from "./SwagInput.vue";
import SwagCheckbox from "./SwagCheckbox.vue";
import {onMounted} from "vue";

const loadScript = (src: string, umdName: string) => {
  return new Promise((resolve, reject) => {
    const script = window.document.createElement('script');
    script.src = src;
    script.defer = true;
    script.async = true;
    script.onload = () => resolve((window as any)[umdName]);
    script.onerror = reject;
    window.document.head.appendChild(script);
  });
}

const identifier = 'SwagNewsletter_Form';

onMounted(async () => {
  console.log('loading');
  const hbspt = await loadScript('https://js.hsforms.net/forms/embed/v2.js', 'hbspt');

  console.log('loaded', hbspt);
  hbspt.forms.create({
    region: "na1",
    portalId: "6506294",
    formId: "1fff50e7-f278-42aa-a61c-1d784872bee2",
    target: '#SwagNewsletter_Form',
    //cssRequired: '',
    submitButtonClass: 'btn --primary',
  });
})
</script>