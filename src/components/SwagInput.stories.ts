import type { Meta, StoryObj } from '@storybook/vue3';

import {DarkVariation, render} from "../../node_modules/vitepress-shopware-docs/src/shopware/stories/helpers";
import SwagInput from './SwagInput.vue';

const meta = {
  title: 'Swag/Input',
  render: render(SwagInput),
} satisfies Meta<typeof SwagInput>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {};

export const Dark: Story = DarkVariation(Default)
