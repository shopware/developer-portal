import {ref} from "vue";
import { marked } from 'marked';

export const qa = () => {
    let query = ref('How do I customize the styles?');
    let pending = ref(false);
    //let response = ref('');
    let response = ref({
        answer: 'To customize the styles, create a `base.scss` file in the directory mentioned in the `theme.json` file and add the desired styles. Then, execute the compiling and building of the `.scss` files using the command `./psh.phar storefront:build` (for development template) or `./bin/build-storefront.sh` (for production template). To see the style changes live, use the `./psh.phar storefront:hot-proxy` (for development template) or `./bin/watch-storefront.sh` (for production template) command.',
    });
    let errorText = ref(false);

    let requestAnswer = function () {
        pending.value = true;
        errorText.value = false;
        fetch('https://ai-ml.fly.dev/', {
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

    return {
        requestAnswer,
        response,
        pending,
        query,
        errorText,
        marked,
    };
}