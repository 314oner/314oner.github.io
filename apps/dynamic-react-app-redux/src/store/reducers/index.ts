import { combineReducers } from '@reduxjs/toolkit';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import filterReducer from './searchFilter/filterSlice';
import themeSlice from './theme/themeSlice';
import todosSlice from './todos/todosSlice';
import userSlice from './user/userSlice';

const persistConfig = {
  key: 'root',
  storage,
  version: 1,
  whitelist: ['todos', 'filter'],
};

const rootReducer = combineReducers({
  theme: themeSlice,
  user: userSlice,
  todos: todosSlice,
  filter: filterReducer,
});
export const myPersistReducer = persistReducer(persistConfig, rootReducer);
