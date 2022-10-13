import { ConfigProvider, Layout } from 'antd';
import { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

const { Content } = Layout;

interface IProps {
  children?: ReactElement;
}

function Default(props: IProps) {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header />

      <Layout>
        <Sidebar />

        <Layout style={{ padding: '0 24px 24px' }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <ConfigProvider>
              <Outlet />
            </ConfigProvider>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default Default;
