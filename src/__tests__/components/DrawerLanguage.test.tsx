import { fireEvent, getByRole, render, waitFor } from '@testing-library/react'
import { I18nextProvider } from 'react-i18next'
import { describe, expect, it } from 'vitest'

import DrawerLanguage, { DrawerLanguageProps, locales } from '@/components/shared/DrawerLanguage'
import { LocaleProvider } from '@/hooks/useLocale'
import { i18n } from '@/locales'

const makeSut = (props: Partial<DrawerLanguageProps>) => {
  return render(
    <LocaleProvider>
      <I18nextProvider i18n={i18n}>
        <DrawerLanguage className="test" title="test" placement="left" />
      </I18nextProvider>
    </LocaleProvider>
  )
}

describe('<DrawerLanguage />', () => {
  it('should not render component on initial render', () => {
    const { getByTestId } = makeSut({})
    waitFor(() => {
      expect(getByTestId('testSelectLanguage')).not.toBeInTheDocument()
    })
  })

  it('should show component when click on svg icon', () => {
    const { getByTestId } = makeSut({})
    const languageSVG = getByTestId('testLanguageSVG')

    expect(languageSVG).toBeInTheDocument()

    fireEvent.click(languageSVG)

    waitFor(() => {
      expect(getByTestId('testSelectLanguage')).toBeInTheDocument()
    })
  })

  it('should hide component when click on close icon', () => {
    const { getByTestId, getByLabelText } = makeSut({})

    const languageSVG = getByTestId('testLanguageSVG')

    expect(languageSVG).toBeInTheDocument()

    fireEvent.click(languageSVG)

    fireEvent.click(getByLabelText('Close'))

    waitFor(() => {
      expect(getByTestId('testSelectLanguage')).not.toBeInTheDocument()
    })
  })

  it('should render two language correctly', () => {
    const { getByTestId } = makeSut({})

    const languageSVG = getByTestId('testLanguageSVG')

    expect(languageSVG).toBeInTheDocument()

    fireEvent.click(languageSVG)

    locales.forEach((lang) =>
      expect(getByTestId(`locale-${lang.locale}`)).toHaveTextContent(lang.value)
    )
  })

  it('should switch lang on by change', () => {
    const { getByTestId, getByRole } = makeSut({})

    const languageSVG = getByTestId('testLanguageSVG')

    expect(languageSVG).toBeInTheDocument()

    fireEvent.click(languageSVG)

    /*Choose Japanese language*/
    fireEvent.click(getByTestId(`locale-${locales[0].locale}`))

    expect(getByRole('presentation')).toBeInTheDocument()
  })
})
