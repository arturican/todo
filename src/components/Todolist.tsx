import React from 'react';
import { TaskFilter } from '../App';
import { AddItemForm } from './AddItemForm';
import { EditSpan } from './EditSpan';

export type TaskType = {
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
  updateTodolist: (tlId: string, title: string) => void;
  updateTask: (tlId: string, taskId: string, title: string) => void;
};

export function Todolist(props: TodolistProps) {
  const onTaskStatusChange = (tlId: string, id: string, isDone: boolean) => {
    props.changeTaskStatus(tlId, id, !isDone);
  };
  const onChangeTitleTodolist = (tlId: string, title: string) => {
    props.updateTodolist(tlId, title);
  };
  const onChangeTitleTask = (tlId: string, taskId: string, title: string) => {
    props.updateTask(tlId, taskId, title);
  };
  const addTask = (title: string) => props.addTask(props.id, title);
  return (
    <div>
      <div className={'todo-title'}>
        <h3>
          <EditSpan title={props.title} callBack={(title) => onChangeTitleTodolist(props.id, title)} />
        </h3>
        <button onClick={() => props.removeTodolist(props.id)}>x</button>
      </div>
      <AddItemForm callBack={addTask} />
      <ul>
        {props.tasks.map((t) => (
          <li key={t.id}>
            <input type="checkbox" checked={t.isDone} onClick={() => onTaskStatusChange(props.id, t.id, t.isDone)} />
            <EditSpan title={t.title} callBack={(title) => onChangeTitleTask(props.id, t.id, title)} />
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
