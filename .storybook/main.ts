import type { StorybookConfig } from "@storybook/vue3-vite";
import { mergeConfig } from 'vite';
import baseConfig from "../node_modules/vitepress-shopware-docs/src/vitepress/config/baseConfig";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  core: {
    builder: '@storybook/builder-vite',
  },
  viteFinal: async (config, {configType}) => {
    return mergeConfig(mergeConfig(config, (await baseConfig()).vite), {
      resolve: {
        alias: {
          vitepress: '/__mocks__/vitepress',
        }
      },
    });
  }
};

export default config;