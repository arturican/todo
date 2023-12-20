import { todolistReducer, taskFilterAC, removeTodolistAC, updateTodolistAC, addTodolistAC } from './todolistReducer'; // Update this import path accordingly
import { TodolistsProps } from '../App';

describe('todolistReducer', () => {
  test('should handle TASK-FILTER action', () => {
    const initialState: TodolistsProps[] = [{ id: '1', title: 'List 1', filter: 'all' }];
    const action = taskFilterAC('1', 'completed');

    const newState = todolistReducer(initialState, action);

    expect(newState[0].filter).toBe('completed');
  });

  test('should handle REMOVE-TODOLIST action', () => {
    const initialState: TodolistsProps[] = [{ id: '1', title: 'List 1', filter: 'all' }];
    const action = removeTodolistAC('1');

    const newState = todolistReducer(initialState, action);

    expect(newState).toEqual([]);
  });

  test('should handle UPDATE-TODOLIST action', () => {
    const initialState: TodolistsProps[] = [{ id: '1', title: 'List 1', filter: 'all' }];
    const action = updateTodolistAC('1', 'New Title');

    const newState = todolistReducer(initialState, action);

    expect(newState[0].title).toBe('New Title');
  });

  test('should handle ADD-TODOLIST action', () => {
    const initialState: TodolistsProps[] = [];
    const action = addTodolistAC('1', 'New List');

    const newState = todolistReducer(initialState, action);

    expect(newState).toEqual([{ id: '1', title: 'New List', filter: 'all' }]);
  });
});
