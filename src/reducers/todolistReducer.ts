import { TaskFilter, TodolistsProps } from '../AppWithReducer';
import { v1 } from 'uuid';

const initialState: TodolistsProps[] = [];
export const todolistReducer = (state: TodolistsProps[] = initialState, action: ActionType): TodolistsProps[] => {
  switch (action.type) {
    case 'TASK-FILTER':
      return state.map((tl) => (tl.id === action.payload.tlId ? { ...tl, filter: action.payload.value } : tl));
    case 'REMOVE-TODOLIST':
      return state.filter((tl) => tl.id !== action.payload.id);
    case 'UPDATE-TODOLIST':
      return state.map((tl) => (tl.id === action.payload.tlId ? { ...tl, title: action.payload.title } : tl));
    case 'ADD-TODOLIST':
      return [...state, { id: action.payload.tlId, title: action.payload.title, filter: 'all' }];
    default:
      return state;
  }
};

type ActionType = TaskFilterType | RemoveTodolistType | UpdateTodolistType | AddTodolistType;

export type TaskFilterType = ReturnType<typeof taskFilterAC>;
export const taskFilterAC = (tlId: string, value: TaskFilter) => {
  return {
    type: 'TASK-FILTER',
    payload: {
      tlId,
      value,
    },
  } as const;
};

export type RemoveTodolistType = ReturnType<typeof removeTodolistAC>;
export const removeTodolistAC = (id: string) => {
  return {
    type: 'REMOVE-TODOLIST',
    payload: {
      id,
    },
  } as const;
};

export type UpdateTodolistType = ReturnType<typeof updateTodolistAC>;
export const updateTodolistAC = (tlId: string, title: string) => {
  return {
    type: 'UPDATE-TODOLIST',
    payload: {
      tlId,
      title,
    },
  } as const;
};

export type AddTodolistType = ReturnType<typeof addTodolistAC>;
export const addTodolistAC = (title: string) => {
  return {
    type: 'ADD-TODOLIST',
    payload: {
      tlId: v1(),
      title,
    },
  } as const;
};
