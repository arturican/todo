import React, { ChangeEvent, useState, KeyboardEvent } from 'react';
import { TaskFilter } from './App';

type TaskType = {
  id: string;
  title: string;
  isDone: boolean;
};

type TodolistProps = {
  title: string;
  tasks: TaskType[];
  removeTask: (taskId: string) => void;
  taskFilter: (value: TaskFilter) => void;
  addTask: (title: string) => void;
  changeTaskStatus: (id: string, isDone: boolean) => void;
  filter: TaskFilter;
};

export function Todolist(props: TodolistProps) {
  const [title, setTitle] = useState('');
  const [error, setError] = useState<string | undefined>();
  const onAddTaskButtonClick = () => {
    title.trim() === '' ? setError('Ошибка! Введите текст') : props.addTask(title.trim());
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

  const onTaskStatusChange = (id: string, isDone: boolean) => {
    props.changeTaskStatus(id, !isDone);
  };
  return (
    <div>
      <h3>{props.title}</h3>
      <div>
        <input value={title} onChange={onTaskTitleChange} onKeyPress={onTaskTitleKeyPress} />
        <button onClick={onAddTaskButtonClick}>+</button>
        {error && <div className={error ? 'error-message' : ''}>{error}</div>}
      </div>
      <ul>
        {props.tasks.map((t) => (
          <li key={t.id}>
            <input type="checkbox" checked={t.isDone} onClick={() => onTaskStatusChange(t.id, t.isDone)} />
            <span>{t.title}</span>
            <button
              onClick={() => {
                props.removeTask(t.id);
              }}
            >
              x
            </button>
          </li>
        ))}
      </ul>
      <div>
        <button onClick={() => props.taskFilter('all')} className={props.filter === 'all' ? 'active-filter' : ''}>
          All
        </button>
        <button onClick={() => props.taskFilter('active')} className={props.filter === 'active' ? 'active-filter' : ''}>
          Active
        </button>
        <button
          onClick={() => props.taskFilter('completed')}
          className={props.filter === 'completed' ? 'active-filter' : ''}
        >
          Completed
        </button>
      </div>
    </div>
  );
}
