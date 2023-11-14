import { TasksType } from '../App';

export const tasksReducer = (state: TasksType[], action: MainType) => {
  switch (action.type) {
    case 'xxx': {
      return state;
    }
    default:
      return state;
  }
};
type MainType = removeTaskACType;
type removeTaskACType = ReturnType<typeof removeTaskAC>;
const removeTaskAC = () => {
  return {
    type: 'REMOVE-TASK',
  } as const;
};
