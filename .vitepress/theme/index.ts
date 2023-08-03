import {SWAGTheme} from "vitepress-shopware-docs";
import SwagRadialBg from "../../src/components/SwagRadialBg.vue";
import OpenApi from "../../src/components/OpenApi.vue";

export default {
    ...SWAGTheme({
        slots: {
            'layout-bottom': [
                SwagRadialBg,
            ]
        },
        enhanceApp({app}) {
            app.component('OpenApi', OpenApi);
        }
    }),
}
