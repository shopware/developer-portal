import type { Meta, StoryObj } from '@storybook/vue3';
import SwagQA from './SwagQA.vue';

const meta = {
  title: 'Example/SwagQA',
  component: SwagQA,
  tags: ['autodocs'],
} satisfies Meta<typeof SwagQA>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedOut: Story = {};
