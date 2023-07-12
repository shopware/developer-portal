import {SWAGTheme} from "vitepress-shopware-docs";
import SwagRadialBg from "../../src/components/SwagRadialBg.vue";

export default {
    ...SWAGTheme({
        slots: {
            'layout-top': [
                SwagRadialBg,
            ]
        }
    }),
}
