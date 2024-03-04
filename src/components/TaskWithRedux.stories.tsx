import type { Meta, StoryObj } from '@storybook/react';
import { TaskWithRedux } from './TaskWithRedux';
import { ReduxStoreProviderDecorator } from '../reducers/ReduxStoreProviderDecorator';
import { useSelector } from 'react-redux';
import { AppRootStateType } from '../reducers/store';
import React from 'react';

import { TaskType } from './TodolistRedux';
import { v1 } from 'uuid';

// More on how to set up stories at:
// https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof TaskWithRedux> = {
  title: 'Todolists/TaskWithRedux',
  component: TaskWithRedux,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [ReduxStoreProviderDecorator],
};

export default meta;
type Story = StoryObj<typeof TaskWithRedux>;

const Task = () => {
  let task = useSelector<AppRootStateType, TaskType>((state) => state.tasks['todolistId1'][0]);

  if (!task) task = { id: v1(), title: 'DEFAULT TASK', isDone: false };

  return <TaskWithRedux task={task} todolistID={'todolistId1'} />;
};
export const TaskWithReduxStory: Story = {
  render: () => <Task />,
};
