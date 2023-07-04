import {SWAGTheme} from "vitepress-shopware-docs";
import {h} from 'vue'
import SwagRadialBg from "../../src/components/SwagRadialBg.vue";

export default {
    ...SWAGTheme({
        slots: {
            'layout-top': [
                h(SwagRadialBg),
            ]
        }
    }),
}
