import type { Meta, StoryObj } from '@storybook/react';

import React, { useState } from 'react';
import { Accordion } from './Accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Accordion',
  component: Accordion,
  tags: ['autodocs'],
  // ...
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Collapsed: Story = {
  args: {
    title: 'Menu',
    collapsed: true,
  },
};

export const Uncollapsed: Story = {
  args: {
    title: 'Menu',
    collapsed: false,
    items: [
      { title: 'Art', value: 1 },
      { title: 'Dil', value: 2 },
      { title: 'Mosk', value: 3 },
    ],
  },
};

const ModeRating = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Accordion
      title={'Menu'}
      onChange={() => setCollapsed(!collapsed)}
      collapsed={collapsed}
      items={[
        { title: 'Art', value: 1 },
        { title: 'Dil', value: 2 },
        { title: 'Mosk', value: 3 },
      ]}
    />
  );
};

export const UncontrolRating: Story = {
  render: () => <ModeRating />,
};
