import 'dayjs/locale/ja';

import { Draft } from '@reduxjs/toolkit';
import { ConfigProvider, Spin } from 'antd';
import enUS from 'antd/es/locale/en_US';
import jaJP from 'antd/es/locale/ja_JP';
import dayjs from 'dayjs';
import { Suspense, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { history, HistoryRouter } from '@/router/history';
import RenderRouter from '@/router/routes';
import { State } from '@/stores';

function App() {
  const { t } = useTranslation();
  const { locale, loading } = useSelector((state: Draft<State>) => state.global);

  useEffect(() => {
    dayjs.locale(locale);
  }, [locale]);

  const localeConfigProvider = useMemo(() => {
    if (locale === 'ja') {
      return {
        ...jaJP,
        Calendar: {
          ...jaJP.Calendar,
          lang: {
            ...jaJP?.Calendar?.lang,
            now: '現在',
          },
        },
        Empty: { description: '表示するデータがありません' },
      };
    } else if (locale === 'en') {
      return {
        ...enUS,
        Empty: { description: 'There is no data to display' },
      };
    }
  }, [locale]);

  return (
    <ConfigProvider locale={localeConfigProvider} componentSize="middle">
      <HistoryRouter history={history}>
        <Suspense fallback={null}>
          <Spin
            spinning={loading}
            className="app-loading-wrapper"
            tip={t('common:tip')}
          />
          <RenderRouter />
        </Suspense>
      </HistoryRouter>
    </ConfigProvider>
  );
}

export default App;
