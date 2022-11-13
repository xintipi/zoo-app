import { renderHook } from '@testing-library/react'
import { Location, Params } from 'react-router-dom'
import { beforeEach, describe, expect, it, vi } from 'vitest'

import useRoutePath from '@/hooks/useRoutePath'

const mockUseLocation: Location = {
  pathname: '/setting/1/edit',
  search: '',
  hash: '',
  key: '',
  state: null,
}

const mockUseParams: Params = {
  id: '1',
}

const pathDesire = '/setting/:id/edit'

describe('useRoutePath()', () => {
  beforeEach(() => {
    vi.mock('react-router-dom', async () => ({
      ...(await vi.importActual<any>('react-router-dom')),
      useLocation: vi.fn().mockImplementation(() => {
        return mockUseLocation
      }),
      useParams: vi.fn().mockImplementation(() => {
        return mockUseParams
      }),
    }))
  })

  it('should return new path string', () => {
    const makeSut = () => {
      return renderHook(() => useRoutePath(mockUseLocation, mockUseParams))
    }
    const { result } = makeSut()
    expect(result.current).toBe(pathDesire)
  })

  it('should return current path if not params', () => {
    const makeSut = () => {
      return renderHook(() => useRoutePath(mockUseLocation, {}))
    }
    const { result } = makeSut()
    expect(result.current).toBe(mockUseLocation.pathname)
  })
})
