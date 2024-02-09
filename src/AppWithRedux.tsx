import React, { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { TaskType } from './components/Todolist';
import { AddItemForm } from './components/AddItemForm';
import { addTodolistAC } from './reducers/todolistReducer';
import { AppRootStateType } from './reducers/store';
import { TodolistRedux } from './components/TodolistRedux';
import { useCallback } from 'react';

export type TaskFilter = 'all' | 'active' | 'completed';
export type TodolistsProps = {
  id: string;
  title: string;
  filter: TaskFilter;
};
export type TasksStateType = {
  [key: string]: TaskType[];
};

function AppWithRedux() {
  const todolists = useSelector<AppRootStateType, TodolistsProps[]>((state) => state.todolists);
  const dispatch = useDispatch();
  const addTodolist = useCallback(
    (title: string) => {
      dispatch(addTodolistAC(title));
    },
    [dispatch]
  );

  return (
    <div className="app">
      <AddItemForm callBack={addTodolist} />
      {todolists.map((tl) => {
        return <TodolistRedux key={tl.id} id={tl.id} title={tl.title} filter={tl.filter} />;
      })}
    </div>
  );
}

export default AppWithRedux;
