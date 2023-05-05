import type { Meta, StoryObj } from '@storybook/vue3';

import {DarkVariation, render} from "../../node_modules/vitepress-shopware-docs/src/shopware/stories/helpers";
import SwagQA from './SwagQA.vue';

const meta = {
  title: 'Example/SwagQA',
  render: render(SwagQA),
} satisfies Meta<typeof SwagQA>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {};

export const Dark: Story = DarkVariation(Default)
