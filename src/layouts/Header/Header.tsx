import {
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Dropdown, Layout, Menu, MenuProps } from 'antd'
import { ItemType } from 'antd/es/menu/hooks/useItems'
import clsx from 'clsx'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useNavigate } from 'react-router-dom'

import Logo from '@/assets/logo.svg'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'
import DrawerLanguage from '@/components/DrawerLanguage/DrawerLanguage'

import styles from './Header.module.scss'

const { Header: HeaderComponent } = Layout

function Header() {
  const navigate = useNavigate()
  const { t } = useTranslation()

  const menus: ItemType[] = [
    {
      key: 'profile',
      label: t<string>('common:user_profile'),
      icon: <UserOutlined className="text-15" />,
    },
    {
      key: 'logout',
      label: t<string>('common:logout'),
      icon: <LogoutOutlined className="text-15" />,
    },
  ]

  const onClick: MenuProps['onClick'] = (event) => {
    if (event.key === 'profile') {
      onHandleProfile()
    } else if (event.key === 'logout') {
      onHandleLogout()
    }
  }

  const onHandleProfile = () => {
    navigate('/profile')
  }

  const onHandleLogout = () => {
    navigate('/login')
  }

  return (
    <HeaderComponent className={clsx(styles.layoutPageHeader)}>
      <div className={clsx(styles.layoutPageHeaderMain)}>
        <Breadcrumb />

        <div className={clsx(styles.actions)}>
          <DrawerLanguage title={t<string>('common:change_language')} placement="bottom" />

          <Dropdown
            overlay={
              <Menu className={clsx(styles.dropdownMenu)} onClick={onClick} items={menus} />
            }>
            <span className={clsx(styles.userAction)}>
              <UserOutlined />
            </span>
          </Dropdown>
        </div>
      </div>
    </HeaderComponent>
  )
}

export default memo(Header)
