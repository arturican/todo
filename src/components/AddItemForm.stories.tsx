import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { AddItemForm, AddItemFormProps } from './AddItemForm';
import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import { Button, TextField } from '@mui/material';
import { AddBox } from '@mui/icons-material';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export

const meta: Meta<typeof AddItemForm> = {
  title: 'Todolist/AddItemForm',
  component: AddItemForm,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    callBack: {
      description: 'Button clicked',
      action: 'clicked',
    },
  },
};
export default meta;
type Story = StoryObj<typeof AddItemForm>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const AddItemFormStory: Story = {};

const AddItemFormError = (props: AddItemFormProps) => {
  const [title, setTitle] = useState('');
  const [error, setError] = useState<string | undefined>('Ошибка! Введите текст');
  const onAddTaskButtonClick = () => {
    title.trim() === '' ? setError('Ошибка! Введите текст') : props.callBack(title.trim());
    setTitle('');
  };
  const onTaskTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
    setError(undefined);
  };

  const onTaskTitleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onAddTaskButtonClick();
    }
  };
  return (
    <div>
      <TextField variant="outlined" value={title} onChange={onTaskTitleChange} onKeyPress={onTaskTitleKeyPress} />
      {/*<button onClick={onAddTaskButtonClick}>+</button>*/}
      <Button
        variant={'contained'}
        color={'primary'}
        style={{ maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px' }}
        onClick={onAddTaskButtonClick}
      >
        <AddBox />
      </Button>
      {error && <div className={error ? 'error-message' : ''}>{error}</div>}
    </div>
  );
};

export const AddItemFormErrorStory = {
  render: () => <AddItemFormError callBack={action('Button clicked')} />,
};
