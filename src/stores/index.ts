import { configureStore } from '@reduxjs/toolkit';
import { CurriedGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware';

import rootReducer from './rootReducer';

const middlewareConfiguration = { serializableCheck: false };

const store = configureStore({
  reducer: rootReducer,
  devTools: {
    name: 'zoo_app',
  },
  middleware: (getDefaultMiddleware: CurriedGetDefaultMiddleware) =>
    getDefaultMiddleware(middlewareConfiguration),
});

export type State = ReturnType<typeof rootReducer>;
export type Dispatch = typeof store.dispatch;
export type Store = typeof store;

export default store;
