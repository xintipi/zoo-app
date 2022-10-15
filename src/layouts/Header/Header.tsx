import {
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Dropdown, Layout, Menu, MenuProps } from 'antd';
import { ItemType } from 'antd/es/menu/hooks/useItems';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import Logo from '@/assets/logo.svg';
import DrawerLanguage from '@/components/DrawerLanguage/DrawerLanguage';

import styles from './Header.module.scss';

const { Header: HeaderComponent } = Layout;

interface IProps {
  collapsed: boolean;
  toggle: () => void;
}

function Header({ collapsed, toggle }: IProps) {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const menus: ItemType[] = [
    {
      key: 'profile',
      label: t('common:user_profile'),
      icon: <UserOutlined className="fs-15" />,
    },
    {
      key: 'logout',
      label: t('common:logout'),
      icon: <LogoutOutlined className="fs-15" />,
    },
  ];

  const onClick: MenuProps['onClick'] = (event) => {
    if (event.key === 'profile') {
      onHandleProfile();
    } else if (event.key === 'logout') {
      onHandleLogout();
    }
  };

  const onHandleProfile = () => {
    navigate('/profile');
  };

  const onHandleLogout = () => {
    navigate('/login');
  };

  return (
    <HeaderComponent
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
        style={{ width: collapsed ? 70 : 200 }}
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
        <span className={clsx(styles.sidebarTrigger)} onClick={toggle}>
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </span>
        <div className={clsx(styles.actions)}>
          <DrawerLanguage
            className="d-flex"
            title={t('common:change_language')}
            placement="bottom"
          />

          <Dropdown
            overlay={
              <Menu
                className={clsx(styles.dropdownMenu)}
                onClick={onClick}
                items={menus}
              />
            }
          >
            <span className={clsx(styles.userAction, 'px-0', 'py-0')}>
              <UserOutlined />
            </span>
          </Dropdown>
        </div>
      </div>
    </HeaderComponent>
  );
}

export default Header;
