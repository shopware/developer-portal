import {SWAGTheme} from "vitepress-shopware-docs";
import SwagDocFeedback from "../../src/components/feedback/SwagDocFeedback.vue";
import SwagRadialBg from "../../src/components/SwagRadialBg.vue";
import SwagOutdatedVersion from "../../src/components/SwagOutdatedVersion.vue";
import SwagRibbon from "../../src/components/SwagRibbon.vue";
//import SwagCopilotSidebar from "../../src/components/copilot/SwagCopilotSidebar.vue";
import SwagCopilotMenu from "../../node_modules/vitepress-shopware-docs/src/shopware/components/copilot/SwagCopilotMenu.vue";
import "./style.scss";

export default {
    ...SWAGTheme({
        slots: {
            'layout-top': [
              //SwagRibbon,
            ],
            'layout-bottom': [
                SwagRadialBg,
                //SwagCopilotSidebar,
            ],
            'nav-bar-content-after': [
                SwagCopilotMenu,
            ],
            'doc-top': [
              SwagOutdatedVersion,
            ],
            'doc-after': [
              SwagDocFeedback,
            ],
            /*'doc-after:unshift': [
              SwagDocFeedback,
            ],*/
        },
        enhanceApp: async ({ app, projectPath }) => {
            try {
              const enhanceApp = await import("../../src/frontends/_source/apps/docs/.vitepress/theme.hub.ts")
              enhanceApp.default({
                app,
              })
            } catch (e) {
              console.error('WARNING: Custom Frontends theme config not found')
            }
        }
    }),
}
