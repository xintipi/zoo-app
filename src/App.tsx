import { Draft } from '@reduxjs/toolkit'
import { Spin } from 'antd'
import { Suspense } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { LocaleProvider } from '@/hooks/useLocale'
import { history, HistoryRouter } from '@/router/history'
import RenderRouter from '@/router/routes'
import { State } from '@/stores'

function App() {
  const { t } = useTranslation()
  const { loading } = useSelector((state: Draft<State>) => state.global)

  return (
    <LocaleProvider>
      <HistoryRouter history={history}>
        <Suspense fallback={null}>
          <Spin spinning={loading} className="app-loading-wrapper" tip={t<string>('common:tip')} />
          <RenderRouter />
        </Suspense>
      </HistoryRouter>
    </LocaleProvider>
  )
}

export default App
