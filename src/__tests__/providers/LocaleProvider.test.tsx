import { render } from '@testing-library/react'
import { I18nextProvider } from 'react-i18next'
import { describe, expect, it } from 'vitest'

import DrawerLanguage, { locales } from '@/components/shared/DrawerLanguage'
import { LocaleProvider } from '@/hooks/useLocale'
import I18n from '@/locales/i18n'

const provider = () => {
  return render(
    <LocaleProvider>
      <I18nextProvider i18n={I18n}>
        <DrawerLanguage hasOpen={true} />
      </I18nextProvider>
    </LocaleProvider>
  )
}

describe('<LocaleProvider />', () => {
  it('should return 2 li tag and has two language to choice on initial state', () => {
    const { queryByTestId } = provider()
    locales.map((lang) => {
      expect(queryByTestId(`locale-${lang.locale}`)).toHaveTextContent(lang.value)
    })
  })
})
