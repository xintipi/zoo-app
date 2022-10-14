import { combineReducers } from '@reduxjs/toolkit';

import globalReducer from './modules/global.store';
import userReducer from './modules/user.store';

const rootReducer = combineReducers({
  user: userReducer,
  global: globalReducer,
});

export default rootReducer;
