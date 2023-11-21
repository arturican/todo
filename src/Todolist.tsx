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
  changeFilter: (value: TaskFilter) => void;
  addTask: (title: string) => void;
};

export function Todolist(props: TodolistProps) {
  const [title, setTitle] = useState('');
  const onAddTaskButtonClick = () => {};
  const onTaskTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };

  const onTaskTitleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onAddTaskButtonClick();
    }
  };
  return (
    <div>
      <h3>{props.title}</h3>
      <div>
        <input value={title} onChange={onTaskTitleChange} onKeyPress={onTaskTitleKeyPress} />
        <button onClick={onAddTaskButtonClick}>+</button>
      </div>
      <ul>
        {props.tasks.map((t) => (
          <li key={t.id}>
            <input type="checkbox" checked={t.isDone} />
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
        <button
          onClick={() => {
            props.changeFilter('all');
          }}
        >
          All
        </button>
        <button
          onClick={() => {
            props.changeFilter('active');
          }}
        >
          Active
        </button>
        <button
          onClick={() => {
            props.changeFilter('completed');
          }}
        >
          Completed
        </button>
      </div>
    </div>
  );
}
