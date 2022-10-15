import {
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Dropdown, Layout, Menu, Tooltip } from 'antd';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import Logo from '@/assets/logo.svg';
import DrawerLanguage from '@/components/DrawerLanguage/DrawerLanguage';

import styles from './Header.module.scss';

const { Header: HeaderLayout } = Layout;

interface IProps {
  collapsed: boolean;
  toggle: () => void;
}

function Header({ collapsed, toggle }: IProps) {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const menu = (
    <Menu>
      <Menu.Item key="1" style={{ padding: '5px 15px' }}>
        <span>
          <UserOutlined style={{ fontSize: '15px' }} />
          <span className="ml-10" onClick={() => navigate('/dashboard')}>
            {t('common:user_profile')}
          </span>
        </span>
      </Menu.Item>
      <Menu.Item key="2" style={{ padding: '5px 15px' }}>
        <span>
          <LogoutOutlined />
          <span className="ml-10" onClick={() => navigate('/login')}>
            {t('common:logout')}
          </span>
        </span>
      </Menu.Item>
    </Menu>
  );

  return (
    <HeaderLayout
      className={clsx(
        styles.layoutPageHeader,
        'd-flex',
        'justify-content-between',
        'align-items-center',
      )}
    >
      <div
        className={clsx(
          styles.logo,
          'd-flex',
          'justify-content-center',
          'align-items-center',
        )}
        style={{ width: collapsed ? 80 : 200 }}
      >
        <img src={Logo} alt="" />
      </div>
      <div
        className={clsx(
          styles.layoutPageHeaderMain,
          'd-flex',
          'justify-content-between',
          'align-items-center',
          'py-0',
          'px-15',
        )}
      >
        <div>
          <span id="sidebar-trigger">
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </span>
        </div>
        <div className={clsx(styles.actions)}>
          <DrawerLanguage
            className="d-flex"
            title={t('common:change_language')}
            placement="bottom"
          />

          <Dropdown overlay={menu}>
            <span className={clsx(styles.userAction, 'px-0', 'py-0')}>
              <UserOutlined />
            </span>
          </Dropdown>
        </div>
      </div>
    </HeaderLayout>
  );
}

export default Header;
