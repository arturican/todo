import React, { ChangeEvent } from 'react';
import { Checkbox, IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { TaskType } from './TodolistRedux';
import { changeTaskStatusAC, changeTaskTitleAC, removeTaskAC } from '../reducers/tasksReducer';
import { EditSpan } from './EditSpan';

type Props = {
  task: TaskType;
  todolistID: string;
};
export const TaskWithRedux = ({ task, todolistID }: Props) => {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    const action = removeTaskAC(task.id, todolistID);
    dispatch(action);
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const newIsDoneValue = e.currentTarget.checked;
    dispatch(changeTaskStatusAC(task.id, newIsDoneValue, todolistID));
  };

  const onTitleChangeHandler = (newValue: string) => {
    dispatch(changeTaskTitleAC(task.id, newValue, todolistID));
  };

  return (
    <div className={task.isDone ? 'is-done' : ''}>
      <Checkbox checked={task.isDone} color="primary" onChange={onChangeHandler} />
      <EditSpan value={task.title} onChange={onTitleChangeHandler} />
      <IconButton onClick={onClickHandler}>
        <Delete />
      </IconButton>
    </div>
  );
};
