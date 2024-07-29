import {
  Action,
  ThunkAction,
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { logger } from 'redux-logger';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import themeSlice from './theme/themeSlice';
import userSlice from './user/userSlice';

const persistConfig = {
  key: 'root',
  storage,
  version: 1,
};

const rootReducer = combineReducers({
  theme: themeSlice,
  user: userSlice,
});
const myPersistReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: myPersistReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logger as any),
  devTools: true,
});
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export type RootState = ReturnType<typeof store.getState>;
export type ErrorState = { error: string };
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const persistor = persistStore(store);
export default store;
