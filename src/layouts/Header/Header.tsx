import { LogoutOutlined, UserOutlined } from '@ant-design/icons'
import { Dropdown, Layout, MenuProps } from 'antd'
import clsx from 'clsx'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import Breadcrumb from '@/components/shared/Breadcrumb'
import DrawerLanguage from '@/components/shared/DrawerLanguage'
import styles from '@/styles/modules/Header.module.scss'

const { Header: HeaderComponent } = Layout

function Header() {
  const navigate = useNavigate()
  const { t } = useTranslation()

  const items: MenuProps['items'] = [
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

  const menuProps = {
    items,
    onClick: onClick,
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

          <Dropdown menu={menuProps} overlayClassName={styles.dropdownMenu}>
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
