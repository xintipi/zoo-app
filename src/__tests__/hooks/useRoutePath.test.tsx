import { renderHook } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { mockUseLocation, mockUseParams, pathDesire } from '@/__mocks__/react-router-dom'
import useRoutePath from '@/hooks/useRoutePath'

vi.mock('@/__mocks__/react-router-dom')

describe('useRoutePath()', () => {
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
