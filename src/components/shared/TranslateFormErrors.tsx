import PropTypes from 'prop-types'

import { useTranslateFormErrors } from '@/hooks'
import { ITranslateForm } from '@/interface/translate-form.interface'

const TranslateFormErrors = ({ errors, touched, setFieldTouched, children }: ITranslateForm) => {
  useTranslateFormErrors({ errors, touched, setFieldTouched })
  return <>{children}</>
}

TranslateFormErrors.propTypes = {
  form: PropTypes.object,
}

export default TranslateFormErrors
