import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.1/todo-lists/',
  withCredentials: true,
});
export const taskAPI = {
  getTask(todolistId: string) {
    return instance.get<TaskType[]>(`${todolistId}/tasks`);
  },
  createTask(todolistId: string, title: string) {
    return instance.post<ResponseType<{ item: TaskType }>>(`${todolistId}/tasks`, { title });
  },
  deleteTask(todolistId: string, taskId: string) {
    return instance.delete<ResponseType>(`${todolistId}/tasks/${taskId}`);
  },
  updateTask(todolistId: string, taskId: string, title: string) {
    return instance.put<ResponseType>(`${todolistId}/tasks/${taskId}`, { title });
  },
};

export type ResponseType<D = NonNullable<unknown>> = {
  resultCode: number;
  messages: string[];
  data: D;
};
export type TaskType = {
  id: string;
  todoListId: string;
  title: string;
  description: string;
  completed: boolean;
  status: string;
  priority: string;
  startDate: string; // Формат даты/времени
  deadline: string; // Формат даты/времени
  order: number;
  addedDate: string; // Формат даты/времени
};
