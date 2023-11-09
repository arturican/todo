import React, { ChangeEvent, KeyboardEvent, useState } from 'react';

export type AddItemForm = {
  id: string;
  addTaskForm: (is: string, title: string) => void;
};

export const AddItemForm = (props: AddItemForm) => {
  const [title, setTitle] = useState('');
  const [eror, serEror] = useState<null | string>();
  const addTaskHandler = () => {
    if (title.trim() === '') {
      serEror('Ошибка введите текст');
    } else {
      props.addTaskForm(props.id, title);
      setTitle('');
    }
  };
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
    serEror(null);
  };

  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      addTaskHandler();
    }
  };
  return (
    <div>
      <input onChange={onChangeHandler} onKeyPress={onKeyPressHandler} value={title} className={eror ? 'error' : ''} />
      <button onClick={addTaskHandler}>+</button>
      {eror && <div className={eror ? 'error-message' : ''}>{eror}</div>}
    </div>
  );
};
