import React, { useState } from 'react';
import './App.css';
import { Todolist } from './components/Todolist';
import { v1 } from 'uuid';
import { AddItemForm } from './components/AddItemForm';

export type TaskFilter = 'all' | 'active' | 'completed';
export type TodolistsProps = {
  id: string;
  title: string;
  filter: TaskFilter;
};

function App() {
  const todolistID1 = v1();
  const todolistID2 = v1();

  const [todolists, setTodolists] = useState<Array<TodolistsProps>>([
    { id: todolistID1, title: 'What to learn', filter: 'all' },
    { id: todolistID2, title: 'What to buy', filter: 'all' },
  ]);

  const [tasks, setTasks] = useState({
    [todolistID1]: [
      { id: v1(), title: 'HTML&CSS', isDone: true },
      { id: v1(), title: 'JS', isDone: true },
      { id: v1(), title: 'ReactJS', isDone: false },
    ],
    [todolistID2]: [
      { id: v1(), title: 'Rest API', isDone: true },
      { id: v1(), title: 'GraphQL', isDone: false },
    ],
  });

  function removeTask(tlId: string, id: string) {
    /*const filteredTasks = tasks.filter((t) => t.id !== id);
            setTasks(filteredTasks);*/
    setTasks({ ...tasks, [tlId]: tasks[tlId].filter((task) => task.id !== id) });
  }

  const removeTodolist = (id: string) => {
    setTodolists(todolists.filter((tl) => tl.id !== id));
    delete tasks[id];
    setTasks({ ...tasks });
  };

  function taskFilter(tlId: string, value: TaskFilter) {
    setTodolists(todolists.map((tl) => (tl.id === tlId ? { ...tl, filter: value } : tl)));
  }

  const addTask = (tlId: string, title: string) => {
    /*setTasks([...tasks, { id: v1(), title: title, isDone: false }]);*/
    setTasks({ ...tasks, [tlId]: [...tasks[tlId], { id: v1(), title: title, isDone: false }] });
  };
  const changeTaskStatus = (tlId: string, id: string, isDone: boolean) => {
    /*setTasks(tasks.map((t) => (t.id === id ? { ...t, isDone: isDone } : t)));*/
    setTasks({ ...tasks, [tlId]: tasks[tlId].map((t) => (t.id === id ? { ...t, isDone: isDone } : t)) });
  };

  const addTodolist = (title: string) => {
    const todolistId = v1();
    setTodolists([{ id: todolistId, title: title, filter: 'all' }, ...todolists]);
    setTasks({ ...tasks, [todolistId]: [] });
  };

  const updateTodolist = (tlId: string, title: string) => {
    setTodolists(todolists.map((tl) => (tl.id === tlId ? { ...tl, title: title } : tl)));
  };

  const updateTask = (tlId: string, taskId: string, title: string) => {
    setTasks({ ...tasks, [tlId]: tasks[tlId].map((task) => (task.id === taskId ? { ...task, title: title } : task)) });
  };

  return (
    <div className="app">
      <AddItemForm callBack={addTodolist} />
      {todolists.map((tl) => {
        const allTodolist = tasks[tl.id];
        let tasksForTodolist = allTodolist;

        if (tl.filter === 'active') {
          tasksForTodolist = allTodolist.filter((task) => !task.isDone);
        }
        if (tl.filter === 'completed') {
          tasksForTodolist = allTodolist.filter((task) => task.isDone);
        }
        return (
          <Todolist
            key={tl.id}
            id={tl.id}
            title={tl.title}
            tasks={tasksForTodolist}
            removeTask={removeTask}
            taskFilter={taskFilter}
            addTask={addTask}
            changeTaskStatus={changeTaskStatus}
            filter={tl.filter}
            removeTodolist={removeTodolist}
            updateTodolist={updateTodolist}
            updateTask={updateTask}
          />
        );
      })}
    </div>
  );
}

export default App;
