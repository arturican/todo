import React, { useState } from 'react';
import './App.css';
import { Todolist } from './components/Todolist';
import { v1 } from 'uuid';

export type TasksType = {
  id: string;
  title: string;
  isDone: boolean;
};

export type TodolistType = {
  id: string;
  title: string;
  filter: FilterType;
};

export type FilterType = 'all' | 'active' | 'completed';

function App() {
  const todolistId1 = v1();
  const todolistId2 = v1();
  const todolistId3 = v1();

  const [todolists, setTodolists] = useState<TodolistType[]>([
    { id: todolistId1, title: 'What to learn', filter: 'all' },
    { id: todolistId2, title: 'What to buy', filter: 'all' },
    {
      id: todolistId3,
      title: 'What to buy',
      filter: 'all',
    },
  ]);
  const [tasks, setTasks] = useState<TasksType[]>([
    { id: v1(), title: 'HTML&CSS!!!', isDone: true },
    { id: v1(), title: 'JS', isDone: true },
    { id: v1(), title: 'React', isDone: false },
  ]);

  const removeTask = (id: string) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const filterTask = (id: string, filter: FilterType) => {
    setTodolists(todolists.map((tl) => (tl.id === id ? { ...tl, filter: filter } : tl)));
  };

  const addTask = (title: string) => {
    setTasks([{ id: v1(), title: title, isDone: false }, ...tasks]);
  };

  const changeCheckStaus = (isDone: boolean, id: string) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, isDone: !isDone } : t)));
  };

  return (
    <div className="app">
      {todolists.map((tl) => {
        let taskForTodolist = tasks;
        switch (tl.filter) {
          case 'active':
            taskForTodolist = tasks.filter((t) => t.isDone === false);
            break;
          case 'completed':
            taskForTodolist = tasks.filter((t) => t.isDone === true);
            break;
        }
        return (
          <Todolist
            key={tl.id}
            id={tl.id}
            title={tl.title}
            tasks={taskForTodolist}
            removeTask={removeTask}
            filterTask={filterTask}
            addTask={addTask}
            changeCheckStatus={changeCheckStaus}
            filter={tl.filter}
          />
        );
      })}
    </div>
  );
}

export default App;
