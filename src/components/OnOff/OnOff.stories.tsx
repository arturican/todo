import type { Meta, StoryObj } from '@storybook/react';
import { OnOff } from './OnOff';
import React, { useState } from 'react';

const meta: Meta<typeof OnOff> = {
  title: 'OnOff',
  component: OnOff,
  tags: ['autodocs'],
  excludeStories: ['ModeChangeOnOff'],
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

const ModeChangeOnOffMemo = () => {
  const [on, setOn] = useState(false);
  const onClickHandler = () => {
    setOn(!on);
  };
  return <OnOff on={on} onClick={onClickHandler} />;
};
export const ModeChangeOnOff = React.memo(ModeChangeOnOffMemo);

export const ModeChange: Story = {
  render: () => <ModeChangeOnOff />,
};
