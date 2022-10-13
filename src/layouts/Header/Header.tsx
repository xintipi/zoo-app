import { Layout } from 'antd';

const { Header: HeaderLayout } = Layout;

function Header() {
  return (
    <HeaderLayout className="header">
      <div className="logo" />
    </HeaderLayout>
  );
}

export default Header;
