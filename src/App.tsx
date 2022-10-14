import 'dayjs/locale/ja';

import { Draft } from '@reduxjs/toolkit';
import { ConfigProvider } from 'antd';
import enUS from 'antd/es/locale/en_US';
import jaJP from 'antd/es/locale/ja_JP';
import dayjs from 'dayjs';
import { Suspense, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';

import { history, HistoryRouter } from '@/router/history';
import RenderRouter from '@/router/routes';
import { State } from '@/stores';

function App() {
  const { locale } = useSelector((state: Draft<State>) => state.global);

  useEffect(() => {
    dayjs.locale(locale);
  }, [locale]);

  const getAntdLocale = useMemo(() => {
    if (locale === 'ja') {
      return jaJP;
    } else if (locale === 'en') {
      return enUS;
    }
  }, [locale]);

  return (
    <ConfigProvider locale={getAntdLocale} componentSize="middle">
      <HistoryRouter history={history}>
        <Suspense fallback={null}>
          <RenderRouter />
        </Suspense>
      </HistoryRouter>
    </ConfigProvider>
  );
}

export default App;
