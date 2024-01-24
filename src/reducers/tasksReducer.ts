import { TaskType } from '../components/Todolist';
import { v1 } from 'uuid';
import { AddTodolistType, RemoveTodolistType } from './todolistReducer';

type TasksType = {
  [key: string]: TaskType[];
};

export const tasksReducer = (state: TasksType, action: ActionType): TasksType => {
  switch (action.type) {
    case 'REMOVE-TASK':
      return {
        ...state,
        [action.payload.tlId]: state[action.payload.tlId].filter((task) => task.id !== action.payload.id),
      };
    case 'ADD-TASK':
      return {
        ...state,
        [action.payload.tlId]: [
          ...state[action.payload.tlId],
          { id: v1(), title: action.payload.title, isDone: false },
        ],
      };
    case 'CHANGE-TASK-STATUS':
      return {
        ...state,
        [action.payload.tlId]: state[action.payload.tlId].map((t) =>
          t.id === action.payload.id ? { ...t, isDone: action.payload.isDone } : t
        ),
      };
    case 'UPDATE-TASK':
      return {
        ...state,
        [action.payload.tlId]: state[action.payload.tlId].map((task) =>
          task.id === action.payload.taskId ? { ...task, title: action.payload.title } : task
        ),
      };
    case 'REMOVE-TODOLIST': {
      const copyState = { ...state };
      delete copyState[action.payload.id];
      return copyState;
    }
    case 'ADD-TODOLIST': {
      return { ...state, [action.payload.tlId]: [] };
    }
    default:
      return state;
  }
};

type ActionType =
  | RemoveTaskType
  | AddTaskType
  | ChangeTaskStatusType
  | UpdateTaskType
  | RemoveTodolistType
  | AddTodolistType
  | AddTodolistTaskType;

type RemoveTaskType = ReturnType<typeof removeTaskAC>;
export const removeTaskAC = (tlId: string, id: string) => {
  return {
    type: 'REMOVE-TASK',
    payload: {
      tlId,
      id,
    },
  } as const;
};

type AddTaskType = ReturnType<typeof addTaskAC>;
export const addTaskAC = (tlId: string, title: string) => {
  return {
    type: 'ADD-TASK',
    payload: {
      tlId,
      title,
    },
  } as const;
};

type ChangeTaskStatusType = ReturnType<typeof changeTaskStatusAC>;
export const changeTaskStatusAC = (tlId: string, id: string, isDone: boolean) => {
  return {
    type: 'CHANGE-TASK-STATUS',
    payload: {
      tlId,
      id,
      isDone,
    },
  } as const;
};

type UpdateTaskType = ReturnType<typeof updateTaskAC>;
export const updateTaskAC = (tlId: string, taskId: string, title: string) => {
  return {
    type: 'UPDATE-TASK',
    payload: {
      tlId,
      taskId,
      title,
    },
  } as const;
};

type AddTodolistTaskType = ReturnType<typeof addTodolistTaskAC>;
export const addTodolistTaskAC = (tlId: string) => {
  return {
    type: 'ADD-TODOLIST',
    payload: {
      tlId,
    },
  } as const;
};
