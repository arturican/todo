import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
  title: 'Select',
  component: Select,
  tags: ['autodocs'],
  // ...
};
export default meta;
type Story = StoryObj<typeof meta>;

export const WithValue: Story = {
  args: {
    items: [
      { title: 'Art', value: '1' },
      { title: 'Dil', value: '2' },
      { title: 'Mosk', value: '3' },
    ],
    value: '2',
  },
};

export const WithOutValue: Story = {
  args: {
    items: [
      { title: 'Art', value: '1' },
      { title: 'Dil', value: '2' },
      { title: 'Mosk', value: '3' },
    ],
  },
};
