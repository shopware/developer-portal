import {SWAGTheme} from "vitepress-shopware-docs";
import SwagRadialBg from "../../src/components/SwagRadialBg.vue";
//import SwagCopilotSidebar from "../../src/components/copilot/SwagCopilotSidebar.vue";
import SwagCopilotMenu from "../../node_modules/vitepress-shopware-docs/src/shopware/components/copilot/SwagCopilotMenu.vue";
import "./style.scss";

const autoDiscoverComponents = (app) => {
    const requireComponent = require.context('../../src/resources/meteor-component-library/components/', true, /[A-Z]\w+\.(vue)$/);

    requireComponent.keys().forEach(fileName => {
        const componentConfig = requireComponent(fileName);
        const componentName = fileName
            .split('/')
            .pop()!
            .replace(/\.\w+$/, '');

        app.component(
            componentName,
            componentConfig.default || componentConfig
        );
    });
}

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
        enhanceApp({ app }) {
            autoDiscoverComponents(app);
        }
    }),
}
