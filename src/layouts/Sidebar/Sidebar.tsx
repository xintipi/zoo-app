import { HomeOutlined, SettingOutlined } from '@ant-design/icons';
import { Draft } from '@reduxjs/toolkit';
import { Layout } from 'antd';
import { ItemType } from 'antd/es/menu/hooks/useItems';
import clsx from 'clsx';
import { SetStateAction, useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { State } from '@/stores';

import MenuComponent from './Menu';
import styles from './Sidebar.module.scss';

const { Sider } = Layout;

interface IProps {
  collapsed: boolean;
}

function Sidebar({ collapsed }: IProps) {
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
