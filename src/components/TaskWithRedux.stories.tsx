import type { Meta, StoryObj } from '@storybook/react';
import { TaskWithRedux } from './TaskWithRedux';
import { ReduxStoreProviderDecorator } from './ReduxStoreProviderDecorator';
import { useSelector } from 'react-redux';
import { AppRootStateType } from '../reducers/store';
import React from 'react';

import { v1 } from 'uuid';
import { TaskPriorities, TaskStatuses, TaskType } from '../api/todolist-api';

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

  if (!task)
    task = {
      id: v1(),
      title: 'DEFAULT TASK',
      status: TaskStatuses.New,
      todoListId: 'todolistId1',
      description: '',
      startDate: '',
      deadline: '',
      addedDate: '',
      order: 0,
      priority: TaskPriorities.Low,
    };

  return <TaskWithRedux task={task} todolistID={'todolistId1'} />;
};
export const TaskWithReduxStory: Story = {
  render: () => <Task />,
};
