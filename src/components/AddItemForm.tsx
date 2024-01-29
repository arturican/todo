import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import { Button, TextField } from '@mui/material';
import { AddBox } from '@mui/icons-material';

export type AddItemFormProps = {
  callBack: (title: string) => void;
};

export const AddItemForm = (props: AddItemFormProps) => {
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
