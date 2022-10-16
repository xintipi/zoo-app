import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Locales } from '@/interface/locales.interface';
import { i18n } from '@/locales';

interface IState {
  locale: Locales;
  loading: boolean;
}

const initialState: IState = {
  locale: i18n.language as Locales,
  loading: false,
};

const globalStore = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setLocaleState(state, action: PayloadAction<Locales>) {
      state.locale = action.payload;
    },
    setLoadingState(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },
});

export const { setLocaleState, setLoadingState } = globalStore.actions;

export default globalStore.reducer;
