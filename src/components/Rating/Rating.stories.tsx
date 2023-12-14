import type { Meta, StoryObj } from '@storybook/react';
import { Rating } from './Rating';
import React, { useState } from 'react';
import { RatingValue } from '../UncontrolRating/UncontrolRating';

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

const ModeRating = () => {
  const [value, setValue] = useState<RatingValue>(0);

  return <Rating value={value} callBack={setValue} />;
};

export const UncontrolRating: Story = {
  render: () => <ModeRating />,
};
