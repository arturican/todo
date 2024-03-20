import React, { useEffect, useState } from 'react';
import {
  GetTasksResponse,
  ResponseType,
  TaskPriorities,
  TaskStatuses,
  TaskType,
  todolistsAPI,
  TodolistType,
} from '../api/todolist-api';

export default {
  title: 'API',
};

export const GetTodolist = () => {
  const [state, setState] = useState<TodolistType[] | null>(null);
  useEffect(() => {
    todolistsAPI.getTodolists().then((res) => {
      setState(res.data);
    });
  }, []);
  return <div>{JSON.stringify(state)}</div>;
};
export const CreateTodolist = () => {
  const [state, setState] = useState<ResponseType<{ item: TodolistType }> | null>(null);
  useEffect(() => {
    const data = 'html';
    todolistsAPI.createTodolist(data).then((res) => {
      setState(res.data);
    });
  }, []);

  return <div>{JSON.stringify(state)}</div>;
};
export const DeleteTodolist = () => {
  const [state, setState] = useState<ResponseType | null>(null);
  useEffect(() => {
    const todolistId = 'a1752984-3827-4e85-875b-cb899a3e2b1d';
    todolistsAPI.deleteTodolist(todolistId).then((res) => {
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
    todolistsAPI.updateTodolist(todolistId, data).then((res) => {
      setState(res.data);
    });
  }, []);
  return <div>{JSON.stringify(state)}</div>;
};
export const GetTask = () => {
  const [state, setState] = useState<GetTasksResponse | null>(null);
  useEffect(() => {
    const todolistId = 'fb308132-11a3-42fc-b085-12c18095013c';
    todolistsAPI.getTasks(todolistId).then((res) => {
      setState(res.data);
    });
  }, []);
  return <div>{JSON.stringify(state)}</div>;
};
export const CreateTask = () => {
  const [state, setState] = useState<ResponseType<{ item: TaskType }> | null>(null);
  useEffect(() => {
    const todolistId = 'fb308132-11a3-42fc-b085-12c18095013c';
    const title = 'HTML';
    todolistsAPI.createTask(todolistId, title).then((res) => {
      setState(res.data);
    });
  }, []);
  return <div>{JSON.stringify(state)}</div>;
};
export const DeleteTask = () => {
  const [state, setState] = useState<ResponseType | null>(null);
  useEffect(() => {
    const todolistId = 'fb308132-11a3-42fc-b085-12c18095013c';
    const taskId = '463c0da0-989e-445b-b5c0-ebc81dbb71eb';
    todolistsAPI.deleteTask(todolistId, taskId).then((res) => {
      setState(res.data);
    });
  }, []);
  return <div>{JSON.stringify(state)}</div>;
};
export const UpdateTask = () => {
  const [state, setState] = useState<ResponseType | null>(null);
  useEffect(() => {
    const todolistId = 'fb308132-11a3-42fc-b085-12c18095013c';
    const taskId = 'd5d7fe4f-a208-48e4-932f-415ea54ec7da';
    const model = {
      title: 'yOOOO',
      description: 'ПРОСТО НАДПИСЬ',
      status: TaskStatuses.New, // Use enum value directly
      priority: TaskPriorities.Low,
      startDate: '',
      deadline: '',
    };
    todolistsAPI.updateTask(todolistId, taskId, model).then((res) => {
      setState(res.data);
    });
  }, []);
  return <div>{JSON.stringify(state)}</div>;
};
