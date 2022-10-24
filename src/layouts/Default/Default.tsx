import { Layout } from 'antd'
import clsx from 'clsx'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'

import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import styles from './Default.module.scss'

const { Content } = Layout

function Default() {
  const [collapsed, setCollapsed] = useState<boolean>(false)

  const toggle = () => {
    setCollapsed(!collapsed)
  }

  return (
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
  )
}

export default Default
