import {
  tasksReducer,
  removeTaskAC,
  addTaskAC,
  changeTaskStatusAC,
  updateTaskAC,
  removeTodolistTaskAC,
  addTodolistTaskAC,
} from './tasksReducer'; // Update this import path accordingly

describe('tasksReducer', () => {
  test('should handle REMOVE-TASK action', () => {
    const initialState = { '1': [{ id: 'task1', title: 'Task 1', isDone: false }] };
    const action = removeTaskAC('1', 'task1');

    const newState = tasksReducer(initialState, action);

    expect(newState['1']).toHaveLength(0);
  });

  test('should handle ADD-TASK action', () => {
    const initialState = { '1': [] };
    const action = addTaskAC('1', 'New Task');

    const newState = tasksReducer(initialState, action);

    expect(newState['1']).toHaveLength(1);
    expect(newState['1'][0].title).toBe('New Task');
    expect(newState['1'][0].isDone).toBe(false);
  });

  test('should handle CHANGE-TASK-STATUS action', () => {
    const initialState = { '1': [{ id: 'task1', title: 'Task 1', isDone: false }] };
    const action = changeTaskStatusAC('1', 'task1', true);

    const newState = tasksReducer(initialState, action);

    expect(newState['1'][0].isDone).toBe(true);
  });

  test('should handle UPDATE-TASK action', () => {
    const initialState = { '1': [{ id: 'task1', title: 'Task 1', isDone: false }] };
    const action = updateTaskAC('1', 'task1', 'Updated Task');

    const newState = tasksReducer(initialState, action);

    expect(newState['1'][0].title).toBe('Updated Task');
  });

  test('should handle REMOVE-TODOLIST action', () => {
    const initialState = { '1': [{ id: 'task1', title: 'Task 1', isDone: false }] };
    const action = removeTodolistTaskAC();

    const newState = tasksReducer(initialState, action);

    expect(newState).toEqual(initialState);
  });

  test('should handle ADD-TODOLIST action', () => {
    const initialState = {};
    const action = addTodolistTaskAC('1');

    const newState = tasksReducer(initialState, action);

    expect(newState['1']).toEqual([]);
  });
});
