import { App } from "vue";
import { VPTheme } from "vitepress-shopware-docs";

export default Object.assign({}, VPTheme, {
  enhanceApp(ctx: { app: App }) {
    // Call parent enhanceApp, so custom Shopware components are available
    VPTheme.enhanceApp(ctx);
  },
});
