import { ReactNode } from 'react'

export type Locales = 'ja' | 'en'

export type LocaleContextType = {
  locale: Locales
  toggleLocale: (locale: Locales) => void
}

export type LocaleProviderProps = {
  children: ReactNode
}
