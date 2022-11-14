import { Menu } from 'antd'
import { ItemType } from 'antd/es/menu/hooks/useItems'
import clsx from 'clsx'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import styles from '@/styles/modules/MenuSection.module.scss'

export interface IMenuProps {
  items: ItemType[]
  openKey?: string
  onChangeOpenKey: (key?: string) => void
  selectedKey: string
  onChangeSelectedKey: (key: string) => void
}

const MenuSection: FC<IMenuProps> = (props) => {
  const { items, openKey, selectedKey, onChangeOpenKey, onChangeSelectedKey } = props
  const navigate = useNavigate()

  const onMenuClick = (path: string) => {
    onChangeSelectedKey(path)
    navigate(path)
  }

  const onOpenChange = (keys: string[]) => {
    const key = keys.pop()
    onChangeOpenKey(key)
  }

  return (
    <Menu
      data-testid="testMenu"
      mode="inline"
      selectedKeys={[selectedKey]}
      openKeys={openKey ? [openKey] : []}
      onOpenChange={onOpenChange}
      onSelect={(ctx) => onMenuClick(ctx.key)}
      className={clsx(styles.layoutPageSiderMenu)}
      items={items}
    />
  )
}

export default MenuSection
