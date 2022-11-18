import { BaseQueryFn } from '@reduxjs/toolkit/query/react'
import { message as $message } from 'antd'
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios'
import { includes, omit } from 'lodash'

import { history } from '@/router/history'
import { State } from '@/stores'
import { setLoadingState } from '@/stores/modules/global.store'

const axiosInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_AXIOS_BASE_URL,
  headers: {
    Accept: 'application/json',
    ContentType: 'application/json;charset=UTF-8',
  },
})

const axiosBaseQuery =
  (): BaseQueryFn<AxiosRequestConfig<any> | any> =>
  async (requestOpts, { getState, dispatch }) => {
    try {
      const token = (getState() as State).auth.token
      const result = await axiosInstance({
        ...requestOpts,
        headers: {
          ...omit(requestOpts.headers, ['user-agent']),
          Authorization: `Bearer ${token}`,
        },
      })

      dispatch(setLoadingState(true))

      return { data: result.data }
    } catch (axiosError) {
      const err = axiosError as AxiosError
      const status = err.response?.status
      const data = err.response?.data

      dispatch(setLoadingState(false))

      if (status === 401) history.replace('/login')

      if (includes([403, 404, 500], status)) history.replace(`/${status}`)

      if (err?.message?.includes('Network Error')) {
        $message.error('ネットワーク エラーです。ネットワークを確認してください')
      }

      return { error: { status, data } }
    }
  }

export const configBaseQuery = axiosBaseQuery()
