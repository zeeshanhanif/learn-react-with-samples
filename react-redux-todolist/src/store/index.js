import { createStore } from 'redux'
import { combineReducers } from 'redux';

import TodoListReducer from './reducers/todoReducer';

export const rootReducer = combineReducers({
    TodoListReducer
// more reducers go here
})

let store = createStore(rootReducer)

store.subscribe(() =>
  console.log(store.getState())
);

export default store;
