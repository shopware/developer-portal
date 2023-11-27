import {SWAGTheme} from "vitepress-shopware-docs";
import SwagRadialBg from "../../src/components/SwagRadialBg.vue";
//import SwagCopilotSidebar from "../../src/components/copilot/SwagCopilotSidebar.vue";
import SwagCopilotMenu from "../../src/components/copilot/SwagCopilotMenu.vue";
import SwagSlackCommunity from "../../src/components/SwagSlackCommunity.vue";

export default {
    ...SWAGTheme({
        slots: {
            'layout-bottom': [
                SwagRadialBg,
                //SwagCopilotSidebar,
                SwagSlackCommunity,
            ],
            'layout-bottom:unshift': [
                SwagSlackCommunity,
            ],
            'nav-bar-content-after': [
                SwagCopilotMenu,
            ]
        },
    }),
}
