import { configureStore } from '@reduxjs/toolkit';
import { CurriedGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware';

import auth from './modules/auth/reducers';
import loader from './modules/loader/reducers';

const middlewareConfiguration = { serializableCheck: false };

const store = configureStore({
  reducer: {
    auth,
    loader,
  },
  devTools: {
    name: 'zoo_app',
  },
  middleware: (getDefaultMiddleware: CurriedGetDefaultMiddleware) =>
    getDefaultMiddleware(middlewareConfiguration),
});

export type State = ReturnType<typeof store.getState>;

export default store;
