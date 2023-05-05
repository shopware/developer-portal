<template>
    <div class="SwagQA max-w-4xl w-full">
        <div class="flex gap-5">
            <input :disabled="pending" v-model="query" class="SwagQA_input text-lg w-10/12 p-4 focus:outline-none rounded" type="text">
            <button :disabled="pending" class="SwagQA_button text-lg w-2/12 rounded" v-on:click="requestAnswer">Ask</button>
        </div>
        <div v-if="errorText" class="mt-5 bg-red-300 p-10 rounded leading-8 text-black">An error occured<br/>{{  errorText  }}</div>
        <div class="SwagQA_answer mt-5 mb-5 p-10 rounded leading-8 text-lg"  v-if="response.answer && !pending" v-html="marked(response.answer)"></div>
        <PageRef :sub="''" page="/docs/guides/plugins/plugins/storefront/add-custom-styling" />
        <PageRef :sub="''" page="/docs/guides/plugins/themes/add-css-js-to-theme" />
        <PageRef :sub="''" page="/docs/guides/plugins/themes/theme-base-guide" />
        <div class="flex justify-center">
            <img v-if="pending" class="animate-pulse mt-10 max-h-48" src="../public/home/jellyfish.png" alt="Loading...">
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue'
import { marked } from 'marked';
let query = ref('How do I customize the styles?');
let pending = ref(false);
//let response = ref('');
let response = ref({
    answer: 'To customize the styles, create a `base.scss` file in the directory mentioned in the `theme.json` file and add the desired styles. Then, execute the compiling and building of the `.scss` files using the command `./psh.phar storefront:build` (for development template) or `./bin/build-storefront.sh` (for production template). To see the style changes live, use the `./psh.phar storefront:hot-proxy` (for development template) or `./bin/watch-storefront.sh` (for production template) command.',
});
let errorText = ref(false);
// When the user clicks the button, send a AJAX request to http://127.0.0.1:8000/ and get the response
let requestAnswer = function () {
    pending.value = true;
    errorText.value = false;
    fetch('http://127.0.0.1:8000/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            query: query.value
        })
    })
        .then(response => response.json())
        .then(data => {
            response.value = data;
            pending.value = false;
        })
        .catch(error => {
            console.log(error)
            errorText.value = error;
            pending.value = false;
        });
    }
</script>

<style scoped lang="scss">
a {
    @apply text-slate-600 underline;
}

.SwagQA {
    &_input {
        @apply bg-slate-200 disabled:bg-slate-400;
        @apply dark:bg-slate-800 dark:disabled:bg-slate-700;
    }
    &_button {
        @apply bg-slate-100 disabled:bg-slate-400;
        @apply dark:bg-slate-900 dark:disabled:bg-slate-600;
    }
    &_answer {
        @apply bg-slate-300 text-slate-900;
        @apply dark:bg-slate-700 dark:text-slate-100;
    }
}
</style>