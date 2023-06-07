import type { Meta, StoryObj } from '@storybook/vue3';

import {DarkVariation, render} from "../../node_modules/vitepress-shopware-docs/src/shopware/stories/helpers";
import SwagCheckbox from './SwagCheckbox.vue';

const meta = {
  title: 'Swag/Checkbox',
  render: render(SwagCheckbox, {
    slot: 'My label',
  }),
} satisfies Meta<typeof SwagCheckbox>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {};

export const Dark: Story = DarkVariation(Default)
