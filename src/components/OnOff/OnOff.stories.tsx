import type { Meta, StoryObj } from '@storybook/react';
import { OnOff } from './OnOff';
import React from 'react';
import { UncontrolOnOff } from '../UncontrolOnOff/UncontrolOnOff';

const meta: Meta<typeof OnOff> = {
  title: 'OnOff',
  component: OnOff,
  tags: ['autodocs'],
  // ...
};
export default meta;
type Story = StoryObj<typeof meta>;

export const OnMode: Story = {
  args: {
    on: true,
  },
};

export const OffMode: Story = {
  args: {
    on: false,
  },
};

export const ModeChange: Story = {
  render: () => <UncontrolOnOff />,
};
