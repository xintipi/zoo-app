import { Button } from 'antd';
import clsx from 'clsx';
import { FormikHelpers, useFormik } from 'formik';
import { useTranslation } from 'react-i18next';

import { ReactComponent as Logo } from '@/assets/logo.svg';
import DrawerLanguage from '@/components/DrawerLanguage/DrawerLanguage';
import FormInput from '@/components/Shared/FormInput/FormInput';
import WithTranslateFormErrors from '@/components/Shared/TranslateForm/WithTranslateFormErrors';
import { ILoginRequest } from '@/interface/login.interface';
import loginForm from '@/schemas/login.form';

import styles from './Login.module.scss';

function Login() {
  const { t } = useTranslation();
  const { loginInitialValues, loginSchema } = loginForm();

  const formik = useFormik({
    initialValues: loginInitialValues,
    validationSchema: loginSchema,
    onSubmit: (values: ILoginRequest, formikHelpers: FormikHelpers<ILoginRequest>) => {
      // const { email, password } = values;
      try {
        // console.log(email, password);
        // console.log(formikHelpers, 'form helper');
      } catch (err) {
        formikHelpers.setErrors({ email: 'Email khong ton tai' });
      }
      formikHelpers.setSubmitting(false);
    },
  });

  return (
    <div className={clsx(styles.login, 'd-flex', 'align-items-center', 'position-relative')}>
      <div className={clsx(styles.containerTight, 'container-tight', 'py-6')}>
        <DrawerLanguage />
        <WithTranslateFormErrors
          errors={formik.errors}
          touched={formik.touched}
          setFieldTouched={formik.setFieldTouched}
        >
          <form onSubmit={formik.handleSubmit} className={clsx(styles.card)}>
            <div className={clsx(styles.cardBody, 'py-30', 'px-0')}>
              <div className={clsx(styles.loginLogo, 'mb-30')}>
                <Logo />
              </div>

              <FormInput
                name="email"
                placeholder={t('login:email_placeholder')}
                label={t('login:email_label')}
                errors={formik.errors.email}
                touched={formik.touched.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values?.email}
              />

              <FormInput
                name="password"
                type="password"
                placeholder={t('login:password_placeholder')}
                label={t('login:password_label')}
                errors={formik.errors.password}
                touched={formik.touched.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values?.password}
              />

              <Button
                className={clsx(styles.btnAction)}
                size="large"
                key="submit"
                htmlType="submit"
                type="primary"
                disabled={!formik.dirty || formik.isSubmitting}
              >
                {t('login:submit_login')}
              </Button>
            </div>
          </form>
        </WithTranslateFormErrors>
      </div>
    </div>
  );
}

export default Login;
