import React, { ChangeEvent, KeyboardEvent, useState } from 'react';

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
      <input value={title} onChange={onTaskTitleChange} onKeyPress={onTaskTitleKeyPress} />
      <button onClick={onAddTaskButtonClick}>+</button>
      {error && <div className={error ? 'error-message' : ''}>{error}</div>}
    </div>
  );
};
