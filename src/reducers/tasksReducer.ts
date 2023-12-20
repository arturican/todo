import { TaskType } from '../components/Todolist';

type TasksType = {
  [key: string]: TaskType[];
};

export const tasksReducer = (state: TasksType, action: Action): TasksType => {
  switch (action.type) {
    case 'REMOVE-TASK':
      return {
        ...state,
        [action.payload.tlId]: state[action.payload.tlId].filter((task) => task.id !== action.payload.id),
      };
    default:
      return state;
  }
};

type Action = RemoveTaskType;

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
