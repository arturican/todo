import TextField from '@mui/material/TextField/TextField';
import React, { ChangeEvent, KeyboardEvent, memo, useState } from 'react';
import { IconButton } from '@mui/material';
import { AddBox } from '@mui/icons-material';

export type AddItemFormProps = {
  callBack: (title: string) => void;
};

const AddItemFormMemo = (props: AddItemFormProps) => {
  const [title, setTitle] = useState('');
  const [error, setError] = useState<string | undefined>();
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
        <AddBox /> !!!
      </IconButton>
    </div>
  );
};
export const AddItemForm = memo(AddItemFormMemo);
