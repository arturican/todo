import type { Meta, StoryObj } from '@storybook/react';
import { UncontrolOnOff } from './UncontrolOnOff';

const meta: Meta<typeof UncontrolOnOff> = {
  title: 'UncontrolOnOff',
  component: UncontrolOnOff,
  // ...
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Mode: Story = {};
