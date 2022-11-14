import { act, renderHook } from '@testing-library/react'
import React, { ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import { describe, expect, it } from 'vitest'

import { LocalesEnum } from '@/enums/locales.enum'
import { LocaleProvider, useLocale } from '@/hooks/useLocale'
import { i18n } from '@/locales'

const makeSut = () => {
  const wrapper = ({ children }: { children: ReactNode }) => (
    <LocaleProvider>
      <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
    </LocaleProvider>
  )
  return renderHook(() => useLocale(), { wrapper })
}

describe('useLocale()', () => {
  it('should return locale is ja on initial state', () => {
    const { result } = makeSut()
    act(() => {
      expect(result?.current?.locale).toBe(LocalesEnum.ja_JP)
    })
  })

  it('should return locale en when click', () => {
    const { result } = makeSut()
    act(() => {
      result.current?.toggleLocale(LocalesEnum.en_US)
    })
    expect(result.current?.locale).toBe(LocalesEnum.en_US)
  })

  it('should return locale ja when click', () => {
    const { result } = makeSut()
    act(() => {
      result.current?.toggleLocale(LocalesEnum.ja_JP)
    })
    expect(result.current?.locale).toBe(LocalesEnum.ja_JP)
  })
})
