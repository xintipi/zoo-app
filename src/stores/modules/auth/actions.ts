import { createAction } from '@reduxjs/toolkit';

const login = createAction('SET_USER_LOGIN');
const logout = createAction('SET_USER_LOGOUT');

export { login, logout };
