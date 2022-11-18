import { combineReducers } from '@reduxjs/toolkit'

import { AUTH_API_REDUCER_KEY, authApi } from '@/api/auth.api'

import authReducer from './modules/auth.store'
import globalReducer from './modules/global.store'

const rootReducer = combineReducers({
  [AUTH_API_REDUCER_KEY]: authApi.reducer,
  auth: authReducer,
  global: globalReducer,
})

export default rootReducer
