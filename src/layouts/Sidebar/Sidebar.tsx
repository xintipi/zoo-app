import {
  HomeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Draft } from '@reduxjs/toolkit';
import { Layout } from 'antd';
import { ItemType } from 'antd/es/menu/hooks/useItems';
import clsx from 'clsx';
import { SetStateAction, useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { State } from '@/stores';

import MenuComponent from './Menu';
import styles from './Sidebar.module.scss';

const { Sider } = Layout;

interface IProps {
  collapsed: boolean;
  toggle: () => void;
}

function Sidebar({ collapsed, toggle }: IProps) {
  const location = useLocation();
  const { t } = useTranslation();
  const { locale } = useSelector((state: Draft<State>) => state.global);

  const [openKey, setOpenkey] = useState<string>();
  const [selectedKey, setSelectedKey] = useState<string>(location.pathname);

  const menuList: ItemType[] = useMemo(() => {
    return [
      {
        label: t('common:dashboard'),
        icon: <HomeOutlined />,
        key: '/dashboard',
      },

      {
        label: t('common:setting'),
        icon: <SettingOutlined />,
        key: '/setting',
        children: [
          {
            label: t('common:staff_registration'),
            key: '/setting/staff',
          },
        ],
      },
    ];
  }, [locale]);

  useEffect(() => {
    // reset active menu item
    if (location.pathname !== selectedKey) {
      setSelectedKey(location.pathname);
    }
  }, [location.pathname]);

  const onChangeOpenKey = useCallback(
    (k: SetStateAction<string | undefined>) => {
      setOpenkey(k);
    },
    [openKey],
  );

  const onChangeSelectedKey = useCallback(
    (k: SetStateAction<string>) => {
      setSelectedKey(k);
    },
    [selectedKey],
  );

  return (
    <Sider
      className={clsx(styles.layoutPageSider)}
      trigger={null}
      collapsible
      collapsedWidth={80}
      collapsed={collapsed}
      breakpoint="md"
    >
      <div
        className={clsx(
          styles.sidebarTrigger,
          'd-flex',
          'align-items-center',
          { 'justify-content-end': !collapsed },
          { 'justify-content-center': collapsed },
          { 'px-15': !collapsed },
        )}
        onClick={toggle}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </div>
      <MenuComponent
        items={menuList}
        openKey={openKey}
        onChangeOpenKey={onChangeOpenKey}
        selectedKey={selectedKey}
        onChangeSelectedKey={onChangeSelectedKey}
      />
    </Sider>
  );
}

export default Sidebar;
