import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';
import { useState } from 'react';
import React from 'react';

const meta: Meta<typeof Select> = {
  title: 'Select',
  component: Select,
  tags: ['autodocs'],
  // ...
};
export default meta;
type Story = StoryObj<typeof meta>;

const SelectWithValue = () => {
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

const SelectOutValue = () => {
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

export const WithValue: Story = {
  render: () => <SelectWithValue />,
};

export const WithOutValue: Story = {
  render: () => <SelectOutValue />,
};
