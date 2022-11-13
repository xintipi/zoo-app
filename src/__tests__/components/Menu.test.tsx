import { HomeOutlined, SettingOutlined } from '@ant-design/icons'
import { render, waitFor } from '@testing-library/react'
import { ItemType } from 'antd/es/menu/hooks/useItems'
import { describe, expect, it, vi } from 'vitest'

import MenuComponent, { IMenuProps } from '@/components/partials/Menu'

const items: ItemType[] = [
  {
    label: 'label 1',
    icon: <HomeOutlined />,
    key: '/key1',
  },
  {
    label: 'label 2',
    icon: <SettingOutlined />,
    key: '/key2',
    children: [
      {
        label: 'label child 2',
        key: '/key3',
      },
    ],
  },
]
let openKey = ''
let selectedKey = ''

const makeSut = (props: Partial<IMenuProps>) => {
  return render(
    <MenuComponent
      items={items}
      openKey={openKey}
      selectedKey={selectedKey}
      onChangeOpenKey={vi.fn()}
      onChangeSelectedKey={vi.fn()}
      {...props}
    />
  )
}

const mockedUsedNavigate = vi.fn()

vi.mock('react-router-dom', async () => ({
  ...(await vi.importActual<any>('react-router-dom')),
  useNavigate: () => mockedUsedNavigate,
}))

const onMenuClick = (func: Function, path: string) => {
  func(path)
  mockedUsedNavigate(path)
}

const onOpenChange = (func: Function, keys: string[]) => {
  const key = keys.pop()
  func(key)
}

const mockedChangeSelectedKey = vi.fn((path) => (selectedKey = path))
const mockedChangeOpenKey = vi.fn((key) => (openKey = key))

describe('Menu()', () => {
  it('should render ul dropdown on initial render', async () => {
    const { getByTestId } = makeSut({})
    await waitFor(() => {
      expect(getByTestId('dropdown-ul')).toBeInTheDocument()
    })
  })

  it('should active menu on initial render', async () => {
    const { getByText } = makeSut({ selectedKey: '/key1' })
    await waitFor(() => {
      expect(getByText(/label 1/)).toBeInTheDocument()
    })
  })

  it('should switch menu use click', async () => {
    onMenuClick(mockedChangeSelectedKey, '/key3')
    onOpenChange(mockedChangeOpenKey, ['/key2'])

    expect(mockedChangeSelectedKey).toHaveBeenCalledTimes(1)
    expect(mockedChangeOpenKey).toHaveBeenCalledTimes(1)
    expect(mockedUsedNavigate).toHaveBeenCalledTimes(1)

    const { container } = makeSut({ openKey, selectedKey })

    const menuSelected = container.querySelector('.ant-menu-item-selected')
    const menuTitle = menuSelected?.querySelector('.ant-menu-title-content')

    await waitFor(() => {
      expect(menuTitle).toBeInTheDocument()
    })
  })
})
