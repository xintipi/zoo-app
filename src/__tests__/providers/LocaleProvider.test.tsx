import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import DrawerLanguage, { locales } from '@/components/shared/DrawerLanguage'
import { LocaleProvider } from '@/hooks/useLocale'

const provider = () => {
  return render(
    <LocaleProvider>
      <DrawerLanguage hasOpen={true} />
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
