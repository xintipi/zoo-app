import dayjs from 'dayjs'
import i18n, { Resource, TFunction } from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import { LocalesEnum } from '@/enums/locales.enum'

import en_US from './en-US'
import ja_JP from './ja-JP'

const resources: Resource = {
  en: en_US,
  ja: ja_JP,
}

i18n
  // detect user language
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  .init({
    lng: localStorage.getItem('i18nextLng') || LocalesEnum.ja_JP,
    fallbackLng: LocalesEnum.ja_JP,
    // Set default namespace
    defaultNS: 'common',
    resources,
    interpolation: {
      escapeValue: false,
    },
  })
  .then((r: TFunction) => r)

export default i18n
