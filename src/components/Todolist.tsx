import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import { FilterType, TasksArrayType } from '../App';
import './Todolist.css';

export type TodolistType = {
  id: string;
  title: string;
  tasks: TasksArrayType[];
  removeTask: (tlId: string, id: string) => void;
  filterTask: (id: string, filter: FilterType) => void;
  addTask: (tlId: string, title: string) => void;
  changeCheckStatus: (tlId: string, isDone: boolean, id: string) => void;
  filter: FilterType;
};
export const Todolist = (props: TodolistType) => {
  const [title, setTitle] = useState('');
  const [eror, serEror] = useState<null | string>();

  const addTaskHandler = () => {
    if (title.trim() === '') {
      serEror('Ошибка введите текст');
    } else {
      props.addTask(props.id, title);
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
    <div className={'wrapper'}>
      <h3>{props.title}</h3>
      <div>
        <input
          onChange={onChangeHandler}
          onKeyPress={onKeyPressHandler}
          value={title}
          className={eror ? 'error' : ''}
        />
        <button onClick={addTaskHandler}>+</button>
        {eror && <div className={eror ? 'error-message' : ''}>{eror}</div>}
      </div>
      <ul>
        {props.tasks.map((t) => {
          const onChangeHandler = () => {
            props.changeCheckStatus(props.id, t.isDone, t.id);
          };

          return (
            <li key={t.id}>
              <input
                type={'checkbox'}
                checked={t.isDone}
                onChange={onChangeHandler}
                className={t.isDone ? 'is-done' : ''}
              />
              {t.title}
              <button onClick={() => props.removeTask(props.id, t.id)}>x</button>
            </li>
          );
        })}
      </ul>
      <div>
        <button
          onClick={() => props.filterTask(props.id, 'all')}
          className={props.filter === 'all' ? 'active-filter' : ''}
        >
          All
        </button>
        <button
          onClick={() => props.filterTask(props.id, 'active')}
          className={props.filter === 'active' ? 'active-filter' : ''}
        >
          Active
        </button>
        <button
          onClick={() => props.filterTask(props.id, 'completed')}
          className={props.filter === 'completed' ? 'active-filter' : ''}
        >
          Completed
        </button>
      </div>
    </div>
  );
};
