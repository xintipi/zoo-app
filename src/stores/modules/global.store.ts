import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IState {
  loading: boolean
}

const initialState: IState = {
  loading: false,
}

const globalStore = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setLoadingState(state, action: PayloadAction<boolean>) {
      state.loading = action.payload
    },
  },
})

export const { setLoadingState } = globalStore.actions

export default globalStore.reducer
