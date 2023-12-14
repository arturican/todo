import type { Meta, StoryObj } from '@storybook/react';
import { OnOff } from './OnOff';
import React, { useState } from 'react';

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

const ModeChangeOnOff = () => {
  const [on, setOn] = useState(false);
  const onClickHandler = () => {
    setOn(!on);
  };
  return <OnOff on={on} onClick={onClickHandler} />;
};

export const ModeChange: Story = {
  render: () => <ModeChangeOnOff />,
};
