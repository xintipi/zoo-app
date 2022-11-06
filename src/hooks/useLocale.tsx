import { createContext, FC, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { LOCALES } from '@/enums'
import { LocaleContextType, LocaleProviderProps, Locales } from '@/interface/locales.interface'

const LocaleContext = createContext<LocaleContextType | undefined>(undefined)

const LocaleProvider: FC<LocaleProviderProps> = ({ children }) => {
  const [locale, setLocale] = useState<Locales>(LOCALES.ja_JP)
  const { i18n } = useTranslation()
  const value = useMemo(() => ({ locale }), [locale])

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
    <LocaleContext.Provider value={{ locale: value.locale, toggleLocale }}>
      {children}
    </LocaleContext.Provider>
  )
}

const useLocale = () => {
  const context = useContext(LocaleContext)
  if (context === undefined) {
    throw new Error('useLocale must be used within a LocaleProvider')
  }
  return context
}

export { LocaleProvider, useLocale }
