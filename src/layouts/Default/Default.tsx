import { Layout } from 'antd';
import { useCallback, useState } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

const { Content } = Layout;

function Default() {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const toggle = useCallback(() => {
    setCollapsed(!collapsed);
  }, [collapsed]);

  return (
    <Layout style={{ height: '100%' }}>
      <Sidebar collapsed={collapsed} toggle={toggle} />

      <Layout>
        <Header />

        <Layout style={{ padding: '0 24px 24px' }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default Default;
