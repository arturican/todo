import { TodolistType } from '../App';
import { v1 } from 'uuid';

export const todolistReducer = (state: TodolistType[], action: MainTodolistType): TodolistType[] => {
  switch (action.type) {
    case 'REMOVE-TODOLIST': {
      return state.filter((tl) => tl.id !== action.payload.id);
    }
    case 'ADD-TODOLIST': {
      return [...state, { id: v1(), title: action.payload.title, filter: 'all' }];
    }
    default:
      return state;
  }
};
export type MainTodolistType = RemoveTodolistACType | AddTodolistACType;
export type RemoveTodolistACType = ReturnType<typeof removeTodolistAC>;
export const removeTodolistAC = (id: string) => {
  return {
    type: 'REMOVE-TODOLIST',
    payload: {
      id,
    },
  } as const;
};

export type AddTodolistACType = ReturnType<typeof addTodolistAC>;
export const addTodolistAC = (title: string) => {
  return {
    type: 'ADD-TODOLIST',
    payload: {
      title,
    },
  } as const;
};
