import { act, renderHook, waitFor } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { useNotification } from '@/hooks'

const makeSut = () => {
  return renderHook(() => useNotification())
}

describe('useNotification()', () => {
  it('should call func to open notify', () => {
    const { result } = makeSut()
    act(() => {
      result.current.openNotification({
        type: 'success',
        message: 'Test notify',
        description: 'test',
      })
    })
    waitFor(() => {
      expect(useNotification()).toHaveBeenCalled()
    })
  })
})
