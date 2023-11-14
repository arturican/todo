import { FilterType, TodolistType } from '../App';
import { v1 } from 'uuid';

export const todolistsReducer = (state: TodolistType[], action: MainTodolistType): TodolistType[] => {
  switch (action.type) {
    case 'REMOVE-TODOLIST': {
      return state.filter((tl) => tl.id !== action.payload.id);
    }
    case 'ADD-TODOLIST': {
      return [...state, { id: v1(), title: action.payload.title, filter: 'all' }];
    }
    case 'CHANGE-TODOLIST-TITLE': {
      return [...state.map((tl) => (tl.id === action.payload.id ? { ...tl, title: action.payload.title } : tl))];
    }
    case 'CHANGE-TODOLIST-FILTER': {
      return [...state.map((tl) => (tl.id === action.payload.id ? { ...tl, filter: action.payload.filter } : tl))];
    }
    default:
      return state;
  }
};
export type MainTodolistType =
  | RemoveTodolistACType
  | AddTodolistACType
  | ChangeTodolistTitleACType
  | ChangeTodolistFilterACType;
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

export type ChangeTodolistTitleACType = ReturnType<typeof changeTodolistTitleAC>;
export const changeTodolistTitleAC = (id: string, title: string) => {
  return {
    type: 'CHANGE-TODOLIST-TITLE',
    payload: {
      id,
      title,
    },
  } as const;
};

export type ChangeTodolistFilterACType = ReturnType<typeof changeTodolistFilterAC>;
export const changeTodolistFilterAC = (id: string, filter: FilterType) => {
  return {
    type: 'CHANGE-TODOLIST-FILTER',
    payload: {
      id,
      filter,
    },
  } as const;
};
