import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './rootReducer';

const store = configureStore({
  reducer: rootReducer,
});

export type State = ReturnType<typeof rootReducer>;
export type Dispatch = typeof store.dispatch;
export type Store = typeof store;

export default store;
