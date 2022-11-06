import {
  HomeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SettingOutlined,
} from '@ant-design/icons'
import { Layout } from 'antd'
import { ItemType } from 'antd/es/menu/hooks/useItems'
import clsx from 'clsx'
import { SetStateAction, useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'

import { useLocale } from '@/hooks/useLocale'

import MenuComponent from './Menu'
import styles from './Sidebar.module.scss'

const { Sider } = Layout

interface IProps {
  collapsed: boolean
  toggle: () => void
}

function Sidebar({ collapsed, toggle }: IProps) {
  const location = useLocation()
  const { t } = useTranslation()
  const { locale } = useLocale()

  const [openKey, setOpenkey] = useState<string>()
  const [selectedKey, setSelectedKey] = useState<string>(location.pathname)

  const items = useMemo((): ItemType[] => {
    return [
      {
        label: t<string>('common:dashboard'),
        icon: <HomeOutlined />,
        key: '/dashboard',
      },

      {
        label: t<string>('common:setting'),
        icon: <SettingOutlined />,
        key: '/setting',
        children: [
          {
            label: t<string>('common:staff_registration'),
            key: '/setting/staff',
          },
        ],
      },
    ]
  }, [locale])

  useEffect(() => {
    // reset active menu item
    if (location.pathname !== selectedKey) {
      setSelectedKey(location.pathname)
    }
  }, [location.pathname])

  const onChangeOpenKey = (k: SetStateAction<string | undefined>) => {
    setOpenkey(k)
  }

  const onChangeSelectedKey = (k: SetStateAction<string>) => {
    setSelectedKey(k)
  }

  return (
    <Sider
      className={clsx(styles.layoutPageSider)}
      trigger={null}
      collapsible
      collapsedWidth={80}
      collapsed={collapsed}
      breakpoint="md">
      <div
        className={clsx(
          styles.sidebarTrigger,
          { 'justify-end px-[15px]': !collapsed },
          { 'justify-center': collapsed }
        )}
        onClick={toggle}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </div>
      <MenuComponent
        items={items}
        openKey={openKey}
        onChangeOpenKey={onChangeOpenKey}
        selectedKey={selectedKey}
        onChangeSelectedKey={onChangeSelectedKey}
      />
    </Sider>
  )
}

export default Sidebar
