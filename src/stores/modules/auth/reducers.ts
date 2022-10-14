import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

import { COOKIE } from '@/enums';
import { IUserProfile } from '@/interface/user/user.interface';
import { State } from '@/stores';

import { login, logout } from './actions';

interface IState {
  token: boolean;
  profile: IUserProfile | unknown;
}

const initialState: IState = {
  token: !!Cookies.get(COOKIE.Name),
  profile: '',
};

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    [login.type]: (state, action: PayloadAction) => {},
    [logout.type]: (state, action: PayloadAction) => {},
  },
});

export const { SET_USER_LOGIN, SET_USER_LOGOUT } = auth.actions;

export const token = (state: Draft<State>) => state.auth.token;
export const profile = (state: Draft<State>) => state.auth.profile;

export default auth.reducer;
