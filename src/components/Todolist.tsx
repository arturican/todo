import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import { TaskFilter, Tasks } from '../App';
import './Todolist.css';

export type TodolistProps = {
  title: string;
  tasks: Tasks[];
  removeTask: (id: string) => void;
  filterTask: (filter: TaskFilter) => void;
  addTask: (title: string) => void;
  changeTaskStatus: (id: string, isDone: boolean) => void;
  filter: TaskFilter;
};
export const Todolist = (props: TodolistProps) => {
  const [title, setTitle] = useState('');
  const [error, serError] = useState<string | undefined>();

  const onAddTaskButtonClick = () => {
    if (title.trim() === '') {
      serError('Ошибка введите текст');
    } else {
      props.addTask(title);
      setTitle('');
    }
  };
  const onTaskTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
    serError(null);
  };

  const onTaskTitleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onAddTaskButtonClick();
    }
  };

  return (
    <div className="wrapper">
      <h3>{props.title}</h3>
      <div>
        <input
          onChange={onTaskTitleChange}
          onKeyPress={onTaskTitleKeyPress}
          value={title}
          className={error ? 'error' : ''}
        />
        <button onClick={onAddTaskButtonClick}>+</button>
        {error && <div className={error ? 'error-message' : ''}>{error}</div>}
      </div>
      <ul>
        {props.tasks.map((t) => {
          const onTaskStatusChange = () => {
            props.changeTaskStatus(t.id, !t.isDone);
          };

          return (
            <li key={t.id}>
              <input
                type="checkbox"
                checked={t.isDone}
                onChange={onTaskStatusChange}
                className={t.isDone ? 'is-done' : ''}
              />
              {t.title}
              <button onClick={() => props.removeTask(t.id)}>x</button>
            </li>
          );
        })}
      </ul>
      <div>
        <button onClick={() => props.filterTask('all')} className={props.filter === 'all' ? 'active-filter' : ''}>
          All
        </button>
        <button onClick={() => props.filterTask('active')} className={props.filter === 'active' ? 'active-filter' : ''}>
          Active
        </button>
        <button
          onClick={() => props.filterTask('completed')}
          className={props.filter === 'completed' ? 'active-filter' : ''}
        >
          Completed
        </button>
      </div>
    </div>
  );
};
