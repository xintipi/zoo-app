import 'dayjs/locale/ja'

import { ConfigProvider, Layout } from 'antd'
import enUS from 'antd/es/locale/en_US'
import jaJP from 'antd/es/locale/ja_JP'
import clsx from 'clsx'
import dayjs from 'dayjs'
import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'

import { useLocale } from '@/hooks/useLocale'

import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import styles from './Default.module.scss'

const { Content } = Layout

function Default() {
  const [collapsed, setCollapsed] = useState<boolean>(false)
  const { locale } = useLocale()

  useEffect(() => {
    dayjs.locale(locale)
  }, [locale])

  const toggle = () => {
    setCollapsed(!collapsed)
  }

  const localeConfigProvider = () => {
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
      }
    } else if (locale === 'en') {
      return {
        ...enUS,
        Empty: { description: 'There is no data to display' },
      }
    }
  }

  return (
    <ConfigProvider locale={localeConfigProvider()} componentSize="middle">
      <Layout className={clsx(styles.siteLayout)}>
        <Sidebar collapsed={collapsed} toggle={toggle} />

        <Layout>
          <Header />

          <Layout className={styles.siteLayout}>
            <Content className={styles.siteLayoutBackground}>
              <Outlet />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </ConfigProvider>
  )
}

export default Default
