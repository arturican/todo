import React, { memo, useCallback, useMemo } from 'react';
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

const TodolistReduxMemo = (props: TodolistProps) => {
  let tasks = useSelector<AppRootStateType, TaskType[]>((state) => state.tasks[props.id]);
  const dispatch = useDispatch();
  const allTodolist = tasks;
  let tasksForTodolist = allTodolist;

  tasks = useMemo(() => {
    console.log('useMemo');
    if (props.filter === 'active') {
      tasksForTodolist = allTodolist.filter((task) => !task.isDone);
    }
    if (props.filter === 'completed') {
      tasksForTodolist = allTodolist.filter((task) => task.isDone);
    }
    return tasks;
  }, [props.filter]);

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

  const addTask = useCallback(
    (title: string) => {
      dispatch(addTaskAC(props.id, title));
    },
    [dispatch]
  );
  const updateTodolist = useCallback(
    (title: string) => {
      dispatch(updateTodolistAC(props.id, title));
    },
    [dispatch, props.id]
  );
  const updateTask = useCallback(
    (taskId: string, title: string) => {
      dispatch(updateTaskAC(props.id, taskId, title));
    },
    [dispatch, props.id]
  );
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
};
export const TodolistRedux = memo(TodolistReduxMemo);
