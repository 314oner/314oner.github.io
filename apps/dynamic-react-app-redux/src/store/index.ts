import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { forceReducerReload } from 'redux-injectors';
import { logger } from 'redux-logger';
import { persistStore } from 'redux-persist';
import { myPersistReducer } from './reducers';

export const store = configureStore({
  reducer: myPersistReducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({ serializableCheck: false }).concat(logger as any),
  ],
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

export function configureAppStore() {
  const appStore = store;
  //@ts-ignore
  if (module.hot) {
    //@ts-ignore
    module.hot.accept('./reducers', () => {
      forceReducerReload(store);
    });
  }
  return appStore;
}
export const persistor = persistStore(store);
export default store;
