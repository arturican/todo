import { addTodolistAC, removeTodolistAC, todolistReducer } from './todolist-reducer';
import { v1 } from 'uuid';
import { TodolistType } from '../App';

test('correct todolist shouild be removed', () => {
  const todolistId1 = v1();
  const todolistId2 = v1();

  const startState: Array<TodolistType> = [
    { id: todolistId1, title: 'What to learn', filter: 'all' },
    { id: todolistId2, title: 'What to buy', filter: 'all' },
  ];

  const endState = todolistReducer(startState, removeTodolistAC(todolistId1));
  expect(endState.length).toBe(1);
  expect(endState[0].id).toBe(todolistId2);
});

test('correct todolist should be added', () => {
  const todolistId1 = v1();
  const todolistId2 = v1();

  const newTodolistTitle = 'New Todolist';

  const startState: Array<TodolistType> = [
    { id: todolistId1, title: 'What to learn', filter: 'all' },
    { id: todolistId2, title: 'What to buy', filter: 'all' },
  ];

  const endState = todolistReducer(startState, addTodolistAC(newTodolistTitle));

  expect(endState.length).toBe(3);
  expect(endState[2].title).toBe(newTodolistTitle);
});