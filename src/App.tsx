import React, { useState } from 'react';
import './App.css';
import { Todolist } from './components/Todolist';
import { v1 } from 'uuid';

export type Tasks = {
  id: string;
  title: string;
  isDone: boolean;
};

export type TaskFilter = 'all' | 'active' | 'completed';

function App() {
  const [tasks, setTasks] = useState<Tasks[]>([
    { id: v1(), title: 'HTML&CSS!!!', isDone: true },
    { id: v1(), title: 'JS', isDone: true },
    { id: v1(), title: 'React', isDone: false },
  ]);

  let taskForTodolist = tasks;

  const [filter, setFilter] = useState<TaskFilter>('all');

  switch (filter) {
    case 'active':
      taskForTodolist = tasks.filter((t) => t.isDone === false);
      break;
    case 'completed':
      taskForTodolist = tasks.filter((t) => t.isDone === true);
      break;
  }

  const removeTask = (id: string) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const filterTask = (filter: TaskFilter) => {
    setFilter(filter);
  };

  const addTask = (title: string) => {
    setTasks([{ id: v1(), title: title, isDone: false }, ...tasks]);
  };

  const changeTaskStatus = (isDone: boolean, id: string) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, isDone: isDone } : t)));
  };

  return (
    <div className="app">
      <Todolist
        title={'What to learn'}
        tasks={taskForTodolist}
        removeTask={removeTask}
        filterTask={filterTask}
        addTask={addTask}
        changeTaskStatus={changeTaskStatus}
        filter={filter}
      />
    </div>
  );
}

export default App;
