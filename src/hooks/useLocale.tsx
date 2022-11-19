import { createContext, FC, useCallback, useContext, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { LocalesEnum } from '@/enums/locales.enum'
import { LocaleContextType, LocaleProviderProps, Locales } from '@/interface/locales.interface'

const LocaleContext = createContext<LocaleContextType | undefined>(undefined)

const LocaleProvider: FC<LocaleProviderProps> = ({ children }) => {
  const [locale, setLocale] = useState<Locales>(LocalesEnum.ja_JP)
  const { i18n } = useTranslation()

  const toggleLocale = useCallback(
    (lang: Locales) => {
      setLocale(lang)
      i18n.changeLanguage(lang).then((r) => r)
    },
    [locale]
  )

  useEffect(() => {
    if (i18n) {
      setLocale(i18n.language as Locales)
    }
  }, [i18n])

  return (
    <LocaleContext.Provider value={{ locale, toggleLocale }}>{children}</LocaleContext.Provider>
  )
}

const useLocale = () => {
  const context = useContext(LocaleContext)
  if (context === undefined) {
    throw new Error('useLocale should within LocaleProvider')
  }
  return context
}

export { LocaleProvider, useLocale }
