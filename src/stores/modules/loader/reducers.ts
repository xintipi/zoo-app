import { createSlice, Draft } from '@reduxjs/toolkit';

import { State } from '@/stores';

import { hide, pending, show } from './actions';

interface IState {
  loading: boolean;
  requestPending: number;
}

const initialState: IState = {
  loading: false,
  requestPending: 0,
};

const loader = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    [show.type]: (state) => {
      state.loading = true;
    },
    [hide.type]: (state) => {
      state.loading = false;
    },
    [pending.type]: (state) => {
      if (state.requestPending === 0) {
        loader.caseReducers.SHOW(state);
      }
      state.requestPending++;
    },
  },
});

export const { SHOW, HIDE, PENDING } = loader.actions;

export const loading = (state: Draft<State>) => state.loader.loading;

export default loader.reducer;
