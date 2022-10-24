import { Layout } from 'antd'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'

import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'

const { Content } = Layout

function Default() {
  const [collapsed, setCollapsed] = useState<boolean>(false)

  const toggle = () => {
    setCollapsed(!collapsed)
  }

  return (
    <Layout className="site-layout">
      <Sidebar collapsed={collapsed} toggle={toggle} />

      <Layout>
        <Header />

        <Layout className="site-layout">
          <Content className="site-layout-background">
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default Default
