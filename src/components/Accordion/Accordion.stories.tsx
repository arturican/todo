import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './Accordion';
import React from 'react';
import { UncontrolAccordion } from '../UncontrolAccordion/UncontrolAccordion';

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
  },
};

export const ModeAccordion: Story = {
  render: () => <UncontrolAccordion title={'Menu'} />,
};
