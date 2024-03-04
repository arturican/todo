import type { Meta, StoryObj } from '@storybook/react';
import AppWithRedux from './AppWithRedux';
import { ReduxStoreProviderDecorator } from './reducers/ReduxStoreProviderDecorator';

// More on how to set up stories at:
// https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof AppWithRedux> = {
  title: 'Todolists/AppWithRedux',
  component: AppWithRedux,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  // More on argTypes:
  decorators: [ReduxStoreProviderDecorator],
  argTypes: {
    onChange: {
      description: 'changed text',
      action: 'clicked',
    },
  },
};

export default meta;
type Story = StoryObj<typeof AppWithRedux>;

export const AppWithReduxStory: Story = {};
