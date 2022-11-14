import { renderHook } from '@testing-library/react'
import { after } from 'lodash'
import { Location, Params, useLocation, useParams } from 'react-router-dom'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { useRoutePath } from '@/hooks'

const router = { useLocation, useParams }

const pathDesire = vi.fn(() => '/setting/:id/edit')

describe('useRoutePath()', () => {
  const mockedLocation = vi.spyOn(router, 'useLocation')
  const mockedParams = vi.spyOn(router, 'useParams')

  beforeEach(() => {
    /*vi.mock('react-router-dom', async () => ({
      ...(await vi.importActual<any>('react-router-dom')),
      useLocation: vi.fn().mockImplementation(() => {
        return mockUseLocation
      }),
      useParams: vi.fn().mockImplementation(() => {
        return mockUseParams
      }),
    }))*/
    mockedLocation.mockReturnValue({
      pathname: '/setting/1/edit',
      search: '',
      hash: '',
      key: '',
      state: null,
    } as Location)
    mockedParams.mockReturnValue({ id: '1' } as Params)
  })

  afterEach(() => {
    mockedLocation.mockRestore()
    mockedParams.mockRestore()
  })

  it('should return new path string', () => {
    const makeSut = () => {
      return renderHook(() => useRoutePath(router.useLocation(), router.useParams()))
    }
    const { result } = makeSut()
    expect(result.current).toBe(pathDesire())
  })

  it('should return current path if not params', () => {
    mockedParams.mockReturnValue({})

    const makeSut = () => {
      return renderHook(() => useRoutePath(router.useLocation(), router.useParams()))
    }
    const { result } = makeSut()
    expect(result.current).toBe(router.useLocation().pathname)
  })
})
