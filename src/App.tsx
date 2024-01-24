import React, { useReducer } from 'react';
import './App.css';
import { TaskType, Todolist } from './components/Todolist';
import { v1 } from 'uuid';
import { AddItemForm } from './components/AddItemForm';
import {
  addTaskAC,
  addTodolistTaskAC,
  changeTaskStatusAC,
  removeTaskAC,
  tasksReducer,
  updateTaskAC,
} from './reducers/tasksReducer';
import {
  addTodolistAC,
  removeTodolistAC,
  taskFilterAC,
  todolistReducer,
  updateTodolistAC,
} from './reducers/todolistReducer';

export type TaskFilter = 'all' | 'active' | 'completed';
export type TodolistsProps = {
  id: string;
  title: string;
  filter: TaskFilter;
};
export type TasksStateType = {
  [key: string]: TaskType[];
};

function App() {
  const todolistID1 = v1();
  const todolistID2 = v1();

  const [todolists, dispatchTodolists] = useReducer(todolistReducer, [
    { id: todolistID1, title: 'What to learn', filter: 'all' },
    { id: todolistID2, title: 'What to buy', filter: 'all' },
  ]);

  const [tasks, dispatchTasks] = useReducer(tasksReducer, {
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
    dispatchTasks(removeTaskAC(tlId, id));
  }

  const removeTodolist = (id: string) => {
    dispatchTodolists(removeTodolistAC(id));
    delete tasks[id];
  };

  function taskFilter(tlId: string, value: TaskFilter) {
    dispatchTodolists(taskFilterAC(tlId, value));
  }

  const addTask = (tlId: string, title: string) => {
    /*setTasks([...tasks, { id: v1(), title: title, isDone: false }]);*/
    dispatchTasks(addTaskAC(tlId, title));
  };
  const changeTaskStatus = (tlId: string, id: string, isDone: boolean) => {
    /*setTasks(tasks.map((t) => (t.id === id ? { ...t, isDone: isDone } : t)));*/
    dispatchTasks(changeTaskStatusAC(tlId, id, isDone));
  };

  const addTodolist = (title: string) => {
    const todolistId = v1();
    dispatchTodolists(addTodolistAC(todolistId, title));
    dispatchTasks(addTodolistTaskAC(todolistId));
  };

  const updateTodolist = (tlId: string, title: string) => {
    dispatchTodolists(updateTodolistAC(tlId, title));
  };

  const updateTask = (tlId: string, taskId: string, title: string) => {
    dispatchTasks(updateTaskAC(tlId, taskId, title));
  };
  console.log(tasks);
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
