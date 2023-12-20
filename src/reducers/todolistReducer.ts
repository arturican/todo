import { TaskFilter, TodolistsProps } from '../App';

export const todolistReducer = (state: TodolistsProps[], action: ActionType): TodolistsProps[] => {
  switch (action.type) {
    case 'TASK-FILTER':
      return state.map((tl) => (tl.id === action.payload.tlId ? { ...tl, filter: action.payload.value } : tl));
    case 'REMOVE-TODOLIST':
      return state.filter((tl) => tl.id !== action.payload.id);
    case 'UPDATE-TODOLIST':
      return state.map((tl) => (tl.id === action.payload.tlId ? { ...tl, title: action.payload.title } : tl));
    case 'ADD-TODOLIST':
      return [{ id: action.payload.tlId, title: action.payload.title, filter: 'all' }, ...state];
    default:
      return state;
  }
};

type ActionType = TaskFilterType | RemoveTodolistType | UpdateTodolistType | AddTodolistType;

type TaskFilterType = ReturnType<typeof taskFilterAC>;
export const taskFilterAC = (tlId: string, value: TaskFilter) => {
  return {
    type: 'TASK-FILTER',
    payload: {
      tlId,
      value,
    },
  } as const;
};

type RemoveTodolistType = ReturnType<typeof removeTodolistAC>;
export const removeTodolistAC = (id: string) => {
  return {
    type: 'REMOVE-TODOLIST',
    payload: {
      id,
    },
  } as const;
};

type UpdateTodolistType = ReturnType<typeof updateTodolistAC>;
export const updateTodolistAC = (tlId: string, title: string) => {
  return {
    type: 'UPDATE-TODOLIST',
    payload: {
      tlId,
      title,
    },
  } as const;
};

type AddTodolistType = ReturnType<typeof addTodolistAC>;
export const addTodolistAC = (tlId: string, title: string) => {
  return {
    type: 'ADD-TODOLIST',
    payload: {
      tlId,
      title,
    },
  } as const;
};
