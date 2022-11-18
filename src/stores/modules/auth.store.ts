import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'

import { CookieEnum } from '@/enums/cookie.enum'
import { IUserProfile } from '@/interface/user.interface'

type IUserProps = {
  user: IUserProfile | unknown
  token: string
}

const initialState: IUserProps = {
  user: null,
  token: Cookies.get(CookieEnum.name) || '',
}

const authStore = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (
      state,
      { payload: { user, token } }: PayloadAction<{ user: IUserProfile; token: string }>
    ) => {
      state.user = user
      state.token = token
    },
  },
})

export const { setCredentials } = authStore.actions

export default authStore.reducer
