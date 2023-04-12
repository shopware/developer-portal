import { App } from "vue";
import { h } from 'vue'
//import { VPTheme } from "vitepress-shopware-docs";
import Theme from 'vitepress/theme'
import "uno.css";
import "./style.scss";

export default {
  ...Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
    //app.component("VPNavBar", VPNavBar);
    //console.log('registering!');
  },
  //VPNavBar
}

/*export default Object.assign({}, VPTheme, {
  enhanceApp(ctx: { app: App }) {
    // Call parent enhanceApp, so custom Shopware components are available
    VPTheme.enhanceApp(ctx);
  },
})*/;
