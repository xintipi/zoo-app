import { configureStore } from '@reduxjs/toolkit'

import { authApi } from '@/api/auth.api'

import rootReducer from './rootReducer'

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat([authApi.middleware]),
})

export type State = ReturnType<typeof rootReducer>
export type Dispatch = typeof store.dispatch
export type Store = typeof store

export default store
