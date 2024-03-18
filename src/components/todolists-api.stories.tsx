import React, { useEffect, useState } from 'react';
import { ResponseType, todolistAPI, TodolistType } from '../api/todolist-api';

export default {
  title: 'API',
};

export const GetTodolist = () => {
  const [state, setState] = useState<TodolistType[] | null>(null);
  useEffect(() => {
    todolistAPI.getTodolist().then((res) => {
      setState(res.data);
    });
  }, []);
  return <div>{JSON.stringify(state)}</div>;
};

export const CreateTodolist = () => {
  const [state, setState] = useState<ResponseType<{ item: TodolistType }> | null>(null);
  useEffect(() => {
    const data = 'html';
    todolistAPI.createTodolist(data).then((res) => {
      setState(res.data);
    });
  }, []);

  return <div>{JSON.stringify(state)}</div>;
};

export const DeleteTodolist = () => {
  const [state, setState] = useState<ResponseType | null>(null);
  useEffect(() => {
    const todolistId = 'a1752984-3827-4e85-875b-cb899a3e2b1d';
    todolistAPI.deleteTodolist(todolistId).then((res) => {
      setState(res.data);
    });
  }, []);

  return <div>{JSON.stringify(state)}</div>;
};

export const UpdateTodolistTitle = () => {
  const [state, setState] = useState<ResponseType | null>(null);
  useEffect(() => {
    const todolistId = 'fb308132-11a3-42fc-b085-12c18095013c';
    const data = 'Redux';
    todolistAPI.updateTodolist(todolistId, data).then((res) => {
      setState(res.data);
    });
  }, []);

  return <div>{JSON.stringify(state)}</div>;
};
