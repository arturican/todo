import React, { useState } from 'react';
import './App.css';
import { Todolist } from './components/Todolist';
import { v1 } from 'uuid';

export type TasksArrayType = {
  id: string;
  title: string;
  isDone: boolean;
};

export type TodolistType = {
  id: string;
  title: string;
  filter: FilterType;
};

export type TaskType = {
  [key: string]: TasksArrayType[];
};

export type FilterType = 'all' | 'active' | 'completed';

function App() {
  const todolistId1 = v1();
  const todolistId2 = v1();

  const [todolists, setTodolists] = useState<TodolistType[]>([
    { id: todolistId1, title: 'What to learn', filter: 'all' },
    { id: todolistId2, title: 'What to buy', filter: 'all' },
  ]);
  const [tasks, setTasks] = useState<TaskType>({
    [todolistId1]: [
      { id: v1(), title: 'HTML&CSS!!!', isDone: true },
      { id: v1(), title: 'JS', isDone: true },
      { id: v1(), title: 'React', isDone: false },
    ],
    [todolistId2]: [
      { id: v1(), title: 'Book', isDone: true },
      { id: v1(), title: 'Beer', isDone: false },
    ],
  });
  const removeTask = (tlId: string, id: string) => {
    //setTasks(tasks.filter((t) => t.id !== id));
    setTasks({ ...tasks, [tlId]: tasks[tlId].filter((t) => t.id !== id) });
  };

  const filterTask = (tlId: string, filter: FilterType) => {
    setTodolists(todolists.map((tl) => (tl.id === tlId ? { ...tl, filter: filter } : tl)));
  };

  const addTask = (tlId: string, title: string) => {
    setTasks({ ...tasks, [tlId]: [...tasks[tlId], { id: v1(), title: title, isDone: false }] });
  };

  const changeCheckStaus = (tlId: string, isDone: boolean, id: string) => {
    //setTasks(tasks.map((t) => (t.id === id ? { ...t, isDone: !isDone } : t)));
    setTasks({ ...tasks, [tlId]: tasks[tlId].map((t) => (t.id === id ? { ...t, isDone: !isDone } : t)) });
  };

  return (
    <div className="app">
      {todolists.map((tl) => {
        let taskForTodolist = tasks[tl.id];
        switch (tl.filter) {
          case 'active':
            taskForTodolist = taskForTodolist.filter((t) => t.isDone === false);
            break;
          case 'completed':
            taskForTodolist = taskForTodolist.filter((t) => t.isDone === true);
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
