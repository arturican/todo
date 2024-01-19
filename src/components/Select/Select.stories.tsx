import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';
import { useState } from 'react';
import React from 'react';

const meta: Meta<typeof Select> = {
  title: 'Select',
  component: Select,
  tags: ['autodocs'],
  excludeStories: ['SelectWithValue', 'SelectOutValue'],
  // ...
};
export default meta;
type Story = StoryObj<typeof meta>;

const SelectWithValueMemo = () => {
  const [value, setValue] = useState<string | null>('2');
  return (
    <Select
      value={value}
      onChange={setValue}
      items={[
        { title: 'Art', value: '1' },
        { title: 'Dil', value: '2' },
        { title: 'Mosk', value: '3' },
      ]}
    />
  );
};
export const SelectWithValue = React.memo(SelectWithValueMemo);

const SelectOutValueMemo = () => {
  const [value, setValue] = useState<string | null>(null);
  return (
    <Select
      value={value}
      onChange={setValue}
      items={[
        { title: 'Art', value: '1' },
        { title: 'Dil', value: '2' },
        { title: 'Mosk', value: '3' },
      ]}
    />
  );
};

export const SelectOutValue = React.memo(SelectOutValueMemo);

export const WithValue: Story = {
  render: () => <SelectWithValue />,
};

export const WithOutValue: Story = {
  render: () => <SelectOutValue />,
};
