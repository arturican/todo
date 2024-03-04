import type { Meta, StoryObj } from '@storybook/react';
import { EditSpan } from './EditSpan';

// More on how to set up stories at:
// https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof EditSpan> = {
  title: 'Todolists/EditSpan',
  component: EditSpan,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  // More on argTypes:

  argTypes: {
    onChange: {
      description: 'changed text',
      action: 'clicked',
    },
  },
};

export default meta;
type Story = StoryObj<typeof EditSpan>;

export const EditStory: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {
    value: 'text',
  },
};
