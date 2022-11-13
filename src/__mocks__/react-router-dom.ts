import { Location, Params } from 'react-router-dom'
import { vi } from 'vitest'

export const mockUseLocation: Location = {
  pathname: '/setting/1/edit',
  search: '',
  hash: '',
  key: '',
  state: null,
}

export const mockUseParams: Params = {
  id: '1',
}

export const pathDesire = '/setting/:id/edit'

export default {
  ...(await vi.importActual<any>('react-router-dom')),
  useLocation: vi.fn().mockImplementation(() => {
    return mockUseLocation
  }),
  useParams: vi.fn().mockImplementation(() => {
    return mockUseParams
  }),
}
