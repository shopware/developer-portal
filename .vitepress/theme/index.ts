import {SWAGTheme} from "vitepress-shopware-docs";
import SwagRadialBg from "../../src/components/SwagRadialBg.vue";
//import SwagCopilotSidebar from "../../src/components/copilot/SwagCopilotSidebar.vue";
import SwagCopilotMenu from "../../node_modules/vitepress-shopware-docs/src/shopware/components/copilot/SwagCopilotMenu.vue";
import "./style.scss";

export default {
    ...SWAGTheme({
        slots: {
            'layout-bottom': [
                SwagRadialBg,
                //SwagCopilotSidebar,
            ],
            'nav-bar-content-after': [
                SwagCopilotMenu,
            ]
        },
    }),
}
