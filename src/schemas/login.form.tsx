import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import { ILoginRequest } from '@/interface/login.interface'
import { yup } from '@/locales'

function loginForm() {
  const { t } = useTranslation()

  const loginInitialValues: ILoginRequest = useMemo(() => {
    return {
      email: '',
      password: '',
    }
  }, [])

  const loginSchema = yup.object().shape({
    email: yup
      .string()
      .email(t<string>('validation:messages.email', { field: t('login:email_label') }))
      .required(t<string>('validation:messages.required', { field: t('login:email_label') })),
    password: yup
      .string()
      .min(6, t<string>('validation:messages.min', { field: t('login:password_label'), length: 6 }))
      .required(t<string>('validation:messages.required', { field: t('login:password_label') }))
      .regexPassword(t('validation:messages.regex_password')),
  })

  return {
    loginSchema,
    loginInitialValues,
  }
}

export default loginForm
