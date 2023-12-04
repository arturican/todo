import React, { ChangeEvent, useState, KeyboardEvent } from 'react';
import { TaskFilter } from './App';

type TaskType = {
  id: string;
  title: string;
  isDone: boolean;
};

type TodolistProps = {
  id: string;
  title: string;
  tasks: TaskType[];
  removeTask: (tlId: string, taskId: string) => void;
  taskFilter: (tlId: string, value: TaskFilter) => void;
  addTask: (tlId: string, title: string) => void;
  changeTaskStatus: (tlId: string, id: string, isDone: boolean) => void;
  filter: TaskFilter;
  removeTodolist: (id: string) => void;
};

export function Todolist(props: TodolistProps) {
  const [title, setTitle] = useState('');
  const [error, setError] = useState<string | undefined>();
  const onAddTaskButtonClick = () => {
    title.trim() === '' ? setError('Ошибка! Введите текст') : props.addTask(props.id, title.trim());
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

  const onTaskStatusChange = (tlId: string, id: string, isDone: boolean) => {
    props.changeTaskStatus(tlId, id, !isDone);
  };
  return (
    <div>
      <h3>{props.title}</h3>
      <button onClick={() => props.removeTodolist(props.id)}>x</button>
      <div>
        <input value={title} onChange={onTaskTitleChange} onKeyPress={onTaskTitleKeyPress} />
        <button onClick={onAddTaskButtonClick}>+</button>
        {error && <div className={error ? 'error-message' : ''}>{error}</div>}
      </div>
      <ul>
        {props.tasks.map((t) => (
          <li key={t.id}>
            <input type="checkbox" checked={t.isDone} onClick={() => onTaskStatusChange(props.id, t.id, t.isDone)} />
            <span>{t.title}</span>
            <button
              onClick={() => {
                props.removeTask(props.id, t.id);
              }}
            >
              x
            </button>
          </li>
        ))}
      </ul>
      <div>
        <button
          onClick={() => props.taskFilter(props.id, 'all')}
          className={props.filter === 'all' ? 'active-filter' : ''}
        >
          All
        </button>
        <button
          onClick={() => props.taskFilter(props.id, 'active')}
          className={props.filter === 'active' ? 'active-filter' : ''}
        >
          Active
        </button>
        <button
          onClick={() => props.taskFilter(props.id, 'completed')}
          className={props.filter === 'completed' ? 'active-filter' : ''}
        >
          Completed
        </button>
      </div>
    </div>
  );
}
