import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.1/',
  withCredentials: true,
});
export const todolistAPI = {
  getTodolist() {
    return instance.get<TodolistType[]>('todo-lists');
  },
  createTodolist(title: string) {
    return instance.post<ResponseType<{ item: TodolistType }>>('todo-lists', { title });
  },
  deleteTodolist(todolistId: string) {
    return instance.delete<ResponseType>(`todo-lists/${todolistId}`);
  },
  updateTodolist(todolistId: string, title: string) {
    return instance.put<ResponseType>(`todo-lists/${todolistId}`, { title });
  },
};

export type TodolistType = {
  id: string;
  addedDate: Date;
  order: number;
  title: string;
};

export type ResponseType<D = NonNullable<unknown>> = {
  resultCode: number;
  messages: string[];
  data: D;
};
