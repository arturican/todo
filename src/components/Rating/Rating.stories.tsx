import type { Meta, StoryObj } from '@storybook/react';
import { Rating } from './Rating';
import React from 'react';
import { UncontrolRating } from '../UncontrolRating/UncontrolRating';

const meta: Meta<typeof Rating> = {
  title: 'Rating',
  component: Rating,
  tags: ['autodocs'],
  // ...
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 0,
  },
};

export const ModeRating: Story = {
  render: () => <UncontrolRating />,
};
