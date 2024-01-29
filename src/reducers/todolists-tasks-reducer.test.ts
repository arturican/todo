import { TasksStateType, TodolistsProps } from '../AppWithReducer';
import { addTodolistAC, todolistReducer } from './todolistReducer';
import { tasksReducer } from './tasksReducer';

test('ids should be equals', () => {
  const startTasksState: TasksStateType = {};
  const startTodolistsState: Array<TodolistsProps> = [];
  const action = addTodolistAC('new todolist');
  const endTasksState = tasksReducer(startTasksState, action);
  const endTodolistsState = todolistReducer(startTodolistsState, action);
  const keys = Object.keys(endTasksState);
  const idFromTasks = keys[0];
  const idFromTodolists = endTodolistsState[0].id;
  expect(idFromTasks).toBe(action.payload.tlId);
  expect(idFromTodolists).toBe(action.payload.tlId);
});
