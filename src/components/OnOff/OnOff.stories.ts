import type { Meta, StoryObj } from '@storybook/react';
import { OnOff } from './OnOff';

const meta: Meta<typeof OnOff> = {
  title: 'OnOff',
  component: OnOff,
  // ...
};
export default meta;
type Story = StoryObj<OnOff>;

export const Primary: Story = {};
