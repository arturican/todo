import { combineReducers, legacy_createStore } from 'redux';
import { countReducer } from './count-reducers';

// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
const rootReducer = combineReducers({
  counter: countReducer,
});
// непосредственно создаём store
export const store = legacy_createStore(rootReducer);
// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>;
// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
