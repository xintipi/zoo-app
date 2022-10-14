import dayjs from 'dayjs';
import i18n, { Resource, TFunction } from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import { LOCALES } from '@/enums';

import en_US from './en-US';
import ja_JP from './ja-JP';

const resources: Resource = {
  en: en_US,
  ja: ja_JP,
};

i18n
  // detect user language
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  .init({
    fallbackLng: LOCALES.ja_JP,
    // Set default namespace
    defaultNS: 'common',
    resources,
    interpolation: {
      format: function (value, format: string | undefined) {
        if (value instanceof Date) return dayjs(value).format(format);
        return value;
      },
    },
  })
  .then((r: TFunction) => r);

export default i18n;
