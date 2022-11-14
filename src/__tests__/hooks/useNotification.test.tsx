import { act, renderHook, waitFor } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import useNotification from '@/hooks/useNotification'

const makeSut = () => {
  return renderHook(() => useNotification())
}

describe('useNotification()', () => {
  it('should call function', () => {
    const { result } = makeSut()
    let mockedOpenNoftification: () => void = vi.fn()
    act(() => {
      mockedOpenNoftification = () => {
        result.current.openNotification({
          type: 'success',
          message: 'Test notify',
          description: 'test',
        })
      }
      mockedOpenNoftification()
    })
    waitFor(() => {
      expect(mockedOpenNoftification).toHaveBeenCalled()
    })
  })
})
