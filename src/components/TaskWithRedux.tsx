import React, { ChangeEvent } from 'react';
import { Checkbox, IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { changeTaskStatusAC, changeTaskTitleAC, removeTaskAC } from '../reducers/tasksReducer';
import { EditSpan } from './EditSpan';
import { TaskStatuses, TaskType } from '../api/todolist-api';

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
    dispatch(changeTaskStatusAC(task.id, newIsDoneValue ? TaskStatuses.Completed : TaskStatuses.New, todolistID));
  };

  const onTitleChangeHandler = (newValue: string) => {
    dispatch(changeTaskTitleAC(task.id, newValue, todolistID));
  };

  return (
    <div className={task.status === TaskStatuses.Completed ? 'is-done' : ''}>
      <Checkbox checked={task.status === TaskStatuses.Completed} color="primary" onChange={onChangeHandler} />
      <EditSpan value={task.title} onChange={onTitleChangeHandler} />
      <IconButton onClick={onClickHandler}>
        <Delete />
      </IconButton>
    </div>
  );
};
