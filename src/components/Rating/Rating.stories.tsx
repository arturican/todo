import type { Meta, StoryObj } from '@storybook/react';
import { Rating, Star } from './Rating';
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

  return (
    <div>
      <Star selected={value > 0} onClick={() => setValue(1)} />
      <Star selected={value > 1} onClick={() => setValue(2)} />
      <Star selected={value > 2} onClick={() => setValue(3)} />
      <Star selected={value > 3} onClick={() => setValue(4)} />
      <Star selected={value > 4} onClick={() => setValue(5)} />
    </div>
  );
};

export const UncontrolRating: Story = {
  render: () => <ModeRating />,
};
