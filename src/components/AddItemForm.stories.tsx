import type { Meta, StoryObj } from '@storybook/react';
import { AddItemForm, AddItemFormProps } from './AddItemForm';
import { action } from '@storybook/addon-actions';
import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import TextField from '@mui/material/TextField/TextField';
import { IconButton } from '@mui/material';
import { AddBox } from '@mui/icons-material';

// More on how to set up stories at:
// https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof AddItemForm> = {
  title: 'TODOLISTS/AddItemForm',
  component: AddItemForm,
  // This component will have an automatically generated Autodocs entry:
  // https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes:
  // https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    callBack: {
      description: 'Button clicked inside form',
      action: 'clicked',
    },
  },
};

export default meta;
type Story = StoryObj<typeof AddItemForm>;

// More on component templates:
// https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const AddItemFormStory: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {
    callBack: action('Button clicked inside form'),
  },
};
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
      <TextField
        variant="outlined"
        error={!!error}
        value={title}
        onChange={onTaskTitleChange}
        onKeyPress={onTaskTitleKeyPress}
        label="Title"
        helperText={error}
      />
      <IconButton color="primary" onClick={onAddTaskButtonClick}>
        <AddBox />
      </IconButton>
    </div>
  );
};
export const AddItemFormErrorStory: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  render: () => <AddItemFormError callBack={action('Button clicked inside form')} />,
};
