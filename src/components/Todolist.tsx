import React from 'react';
import { FilterType, TasksArrayType } from '../App';
import './Todolist.css';
import { AddItemForm } from './AddItemForm';

export type TodolistType = {
  id: string;
  title: string;
  tasks: TasksArrayType[];
  removeTask: (tlId: string, id: string) => void;
  filterTask: (id: string, filter: FilterType) => void;
  addTask: (tlId: string, title: string) => void;
  changeCheckStatus: (tlId: string, isDone: boolean, id: string) => void;
  filter: FilterType;
  removeTodolist: (tlId: string) => void;
};
export const Todolist = (props: TodolistType) => {
  return (
    <div className={'wrapper'}>
      <div className={'wrapper-title'}>
        <h3>{props.title}</h3>
        <button
          onClick={() => {
            props.removeTodolist(props.id);
          }}
        >
          X
        </button>
      </div>
      <AddItemForm id={props.id} addTaskForm={props.addTask} />

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
