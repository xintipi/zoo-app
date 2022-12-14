import { Button } from 'antd'
import clsx from 'clsx'
import { FormikHelpers, useFormik } from 'formik'
import { useTranslation } from 'react-i18next'

import { useLoginMutation } from '@/api/auth.api'
import { ReactComponent as Logo } from '@/assets/logo.svg'
import Input from '@/components/form/Input'
import TranslateFormErrors from '@/components/shared/TranslateFormErrors'
import { ILoginRequest } from '@/interface/login.interface'
import loginForm from '@/schemas/login.form'

import styles from './Login.module.scss'

function Login() {
  const { t } = useTranslation()
  const { loginInitialValues, loginSchema } = loginForm()
  const [login, { isLoading, data, error }] = useLoginMutation()

  const formik = useFormik({
    initialValues: loginInitialValues,
    validationSchema: loginSchema,
    onSubmit: async (values: ILoginRequest, formikHelpers: FormikHelpers<ILoginRequest>) => {
      const { email, password } = values
      try {
        // console.log(email, password);
        // console.log(formikHelpers, 'form helper');
        await login({ email, password })
      } catch (err) {
        formikHelpers.setErrors({ email: 'Email khong ton tai' })
      }
      formikHelpers.setSubmitting(false)
    },
  })

  return (
    <div className={clsx(styles.login)}>
      <div className="container-tight max-w-[524px] py-[6px]">
        <TranslateFormErrors
          errors={formik.errors}
          touched={formik.touched}
          setFieldTouched={formik.setFieldTouched}>
          <form onSubmit={formik.handleSubmit} className={clsx(styles.card)}>
            <div className={clsx(styles.cardBody)}>
              <div className="flex-box mb-[30px]">
                <Logo className="h-[66px] w-[130px]" />
              </div>

              <Input
                name="email"
                placeholder={t<string>('login:email_placeholder')}
                label={t<string>('login:email_label')}
                errors={formik.errors.email}
                touched={formik.touched.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values?.email}
                required
              />

              <Input
                name="password"
                type="password"
                placeholder={t<string>('login:password_placeholder')}
                label={t<string>('login:password_label')}
                errors={formik.errors.password}
                touched={formik.touched.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values?.password}
                required
              />

              <Button
                className={styles.btnAction}
                size="large"
                key="submit"
                htmlType="submit"
                type="primary"
                loading={isLoading}
                disabled={!formik.dirty || formik.isSubmitting}>
                {t<string>('login:submit_login')}
              </Button>
            </div>
          </form>
        </TranslateFormErrors>
      </div>
    </div>
  )
}

export default Login
