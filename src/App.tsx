import React, { useState } from 'react';
import './App.css';
import { Todolist } from './Todolist';
import { v1 } from 'uuid';

export type TaskFilter = 'all' | 'active' | 'completed';

function App() {
  const [tasks, setTasks] = useState([
    { id: v1(), title: 'HTML&CSS', isDone: true },
    { id: v1(), title: 'JS', isDone: true },
    { id: v1(), title: 'ReactJS', isDone: false },
    { id: v1(), title: 'Rest API', isDone: false },
    { id: v1(), title: 'GraphQL', isDone: false },
  ]);

  function removeTask(id: string) {
    const filteredTasks = tasks.filter((t) => t.id !== id);
    setTasks(filteredTasks);
  }

  const [filter, setFilter] = useState<TaskFilter>('all');

  let tasksForTodolist = tasks;

  if (filter === 'active') {
    tasksForTodolist = tasks.filter((t) => t.isDone === false);
  }
  if (filter === 'completed') {
    tasksForTodolist = tasks.filter((t) => t.isDone === true);
  }

  function taskFilter(value: TaskFilter) {
    setFilter(value);
  }

  const addTask = (title: string) => {
    setTasks([...tasks, { id: v1(), title: title, isDone: false }]);
  };
  const changeTaskStatus = (id: string, isDone: boolean) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, isDone: isDone } : t)));
  };

  return (
    <div className="app">
      <Todolist
        title="What to learn"
        tasks={tasksForTodolist}
        removeTask={removeTask}
        taskFilter={taskFilter}
        addTask={addTask}
        changeTaskStatus={changeTaskStatus}
        filter={filter}
      />
    </div>
  );
}

export default App;
