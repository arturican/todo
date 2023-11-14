import { TasksType } from '../App';
import { v1 } from 'uuid';

export const tasksReducer = (state: TasksType[], action: MainType) => {
  switch (action.type) {
    case 'REMOVE-TASK': {
      return state.filter((el) => el.id !== action.payload.id);
    }
    case 'ADD-TASK': {
      return [{ id: v1(), title: action.payload.title, isDone: false }, ...state];
    }
    case 'CHANGE-CHECK-STATUS': {
      return state.map((el) => (el.id === action.payload.id ? { ...el, isDone: !action.payload.isDone } : el));
    }
    default:
      return state;
  }
};
type MainType = RemoveTaskACType | AddTaskACType | ChangeCheckStausACType;
export type RemoveTaskACType = ReturnType<typeof removeTaskAC>;
export const removeTaskAC = (id: string) => {
  return {
    type: 'REMOVE-TASK',
    payload: {
      id,
    },
  } as const;
};

export type AddTaskACType = ReturnType<typeof addTaskAC>;
export const addTaskAC = (title: string) => {
  return {
    type: 'ADD-TASK',
    payload: {
      title,
    },
  } as const;
};

export type ChangeCheckStausACType = ReturnType<typeof changeCheckStausAC>;
export const changeCheckStausAC = (isDone: boolean, id: string) => {
  return {
    type: 'CHANGE-CHECK-STATUS',
    payload: {
      isDone,
      id,
    },
  } as const;
};
