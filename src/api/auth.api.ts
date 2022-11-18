import { createApi } from '@reduxjs/toolkit/query/react'

import { configBaseQuery } from '@/api/index'
import { IResponseType } from '@/interface/axios.interface'
import { ILoginRequest, IToken } from '@/interface/login.interface'
import { IUserProfile } from '@/interface/user.interface'

const baseUrl = 'auth'
export const AUTH_API_REDUCER_KEY = 'authApi'
export const authApi = createApi({
  reducerPath: AUTH_API_REDUCER_KEY,
  baseQuery: configBaseQuery,
  endpoints: (builder) => ({
    login: builder.mutation<IResponseType<IToken>, ILoginRequest>({
      query: (credentials) => ({
        url: `${baseUrl}/login`,
        method: 'POST',
        body: credentials,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: `${baseUrl}/logout`,
        method: 'DELETE',
      }),
    }),
    getUserInfo: builder.query<IResponseType<IUserProfile>, void>({
      query: () => `${baseUrl}/profile`,
    }),
  }),
})

export const { useLoginMutation, useLogoutMutation, useGetUserInfoQuery } = authApi
