import { TodolistType } from '../App';

export const todolistReducer = (state: TodolistType[], action: MainTodolistType): TodolistType[] => {
  switch (action.type) {
    case 'REMOVE-TODOLIST': {
      return state;
    }
    default:
      return state;
  }
};
export type MainTodolistType = RemoveTodolistACType;
export type RemoveTodolistACType = ReturnType<typeof removeTodolistAC>;
export const removeTodolistAC = (id: string) => {
  return {
    type: 'REMOVE-TODOLIST',
    payload: {
      id,
    } as const,
  };
};
