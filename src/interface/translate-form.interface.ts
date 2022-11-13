import { FormikErrors, FormikTouched } from 'formik'
import { ReactNode } from 'react'

export interface ITranslateForm {
  errors: FormikErrors<any>
  touched: FormikTouched<any>
  setFieldTouched: (field: string) => void
  children?: ReactNode
}
