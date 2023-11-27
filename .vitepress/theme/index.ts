import {SWAGTheme} from "vitepress-shopware-docs";
import SwagRadialBg from "../../src/components/SwagRadialBg.vue";
//import SwagCopilotSidebar from "../../src/components/copilot/SwagCopilotSidebar.vue";
import SwagCopilotMenu from "../../src/components/copilot/SwagCopilotMenu.vue";

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
        }
    }),
}
