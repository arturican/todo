import React from 'react';
import { TaskFilter } from '../AppWithReducer';
import { AddItemForm } from './AddItemForm';
import { EditSpan } from './EditSpan';
import { AppRootStateType } from '../reducers/store';
import { useDispatch, useSelector } from 'react-redux';
import { addTaskAC, changeTaskStatusAC, removeTaskAC, updateTaskAC } from '../reducers/tasksReducer';
import { removeTodolistAC, taskFilterAC, updateTodolistAC } from '../reducers/todolistReducer';

export type TaskType = {
  id: string;
  title: string;
  isDone: boolean;
};

type TodolistProps = {
  id: string;
  title: string;
  filter: TaskFilter;
};

export function TodolistRedux(props: TodolistProps) {
  const tasks = useSelector<AppRootStateType, TaskType[]>((state) => state.tasks[props.id]);
  const dispatch = useDispatch();
  const allTodolist = tasks;
  let tasksForTodolist = allTodolist;

  if (props.filter === 'active') {
    tasksForTodolist = allTodolist.filter((task) => !task.isDone);
  }
  if (props.filter === 'completed') {
    tasksForTodolist = allTodolist.filter((task) => task.isDone);
  }
  const removeTask = (id: string) => {
    dispatch(removeTaskAC(props.id, id));
  };
  const removeTodolist = () => {
    dispatch(removeTodolistAC(props.id));
  };
  const taskFilter = (value: TaskFilter) => {
    dispatch(taskFilterAC(props.id, value));
  };
  const onTaskStatusChange = (id: string, isDone: boolean) => {
    dispatch(changeTaskStatusAC(props.id, id, isDone));
  };

  const addTask = (title: string) => {
    dispatch(addTaskAC(props.id, title));
  };
  const updateTodolist = (title: string) => {
    dispatch(updateTodolistAC(props.id, title));
  };
  const updateTask = (taskId: string, title: string) => {
    dispatch(updateTaskAC(props.id, taskId, title));
  };
  return (
    <div>
      <div className={'todo-title'}>
        <h3>
          <EditSpan title={props.title} callBack={(title) => updateTodolist(title)} />
        </h3>
        <button onClick={() => removeTodolist()}>x</button>
      </div>
      <AddItemForm callBack={addTask} />
      <ul>
        {tasksForTodolist.map((t) => (
          <li key={t.id}>
            <input
              type="checkbox"
              checked={t.isDone}
              onClick={(e) => onTaskStatusChange(t.id, e.currentTarget.checked)}
            />
            <EditSpan title={t.title} callBack={(title) => updateTask(t.id, title)} />
            <button
              onClick={() => {
                removeTask(t.id);
              }}
            >
              x
            </button>
          </li>
        ))}
      </ul>
      <div>
        <button onClick={() => taskFilter('all')} className={props.filter === 'all' ? 'active-filter' : ''}>
          All
        </button>
        <button onClick={() => taskFilter('active')} className={props.filter === 'active' ? 'active-filter' : ''}>
          Active
        </button>
        <button onClick={() => taskFilter('completed')} className={props.filter === 'completed' ? 'active-filter' : ''}>
          Completed
        </button>
      </div>
    </div>
  );
}
