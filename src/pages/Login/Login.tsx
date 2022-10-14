import { Button } from 'antd';
import clsx from 'clsx';
import { Formik, FormikHelpers } from 'formik';
import { useTranslation } from 'react-i18next';

import { ReactComponent as Logo } from '@/assets/logo.svg';
import DrawerLanguage from '@/components/DrawerLanguage/DrawerLanguage';
import FormInput from '@/components/Shared/FormInput/FormInput';
import yup from '@/config/validation.config';
import { ILoginRequest } from '@/interface/user/login.interface';

import styles from './Login.module.scss';

function Login() {
  const { t } = useTranslation();

  const initialValues: ILoginRequest = {
    email: '',
    password: '',
  };

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email(t('validation:messages.email', { field: t('login:email_label') }))
      .required(t('validation:messages.required', { field: t('login:email_label') })),
    password: yup
      .string()
      .min(
        6,
        t('validation:messages.min', { field: t('login:password_label'), length: 6 }),
      )
      .required(t('validation:messages.required', { field: t('login:password_label') }))
      .regexPassword(t('validation:messages.regex_password')),
  });

  const onSubmit = (
    values: ILoginRequest,
    formikHelpers: FormikHelpers<ILoginRequest>,
  ) => {
    if (Object.keys(values).length) {
      // dispatch(onLogIn(true));
    }
    console.log(values);
    formikHelpers.setSubmitting(false);
  };

  return (
    <div
      className={clsx(styles.login, 'd-flex', 'align-items-center', 'position-relative')}
    >
      <DrawerLanguage className={clsx(styles.iconDrawer)} />

      <div className={clsx(styles.containerTight, 'container-tight', 'py-6')}>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, formikHelpers) => onSubmit(values, formikHelpers)}
          validationSchema={validationSchema}
        >
          {({
            values,
            errors,
            touched,
            dirty,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => {
            return (
              <form onSubmit={handleSubmit} className={clsx(styles.card)}>
                <div className={clsx(styles.cardBody, 'py-30', 'px-0')}>
                  <div
                    className={clsx(
                      'd-flex',
                      'justify-content-center',
                      'mb-30',
                      styles.loginLogo,
                    )}
                  >
                    <Logo />
                  </div>

                  <FormInput
                    name="email"
                    placeholder={t('login:email_placeholder')}
                    label={t('login:email_label')}
                    errors={errors}
                    touched={touched}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />

                  <FormInput
                    name="password"
                    type="password"
                    placeholder={t('login:password_placeholder')}
                    label={t('login:password_label')}
                    errors={errors}
                    touched={touched}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />

                  <Button
                    className={clsx(styles.btnAction)}
                    size="large"
                    key="submit"
                    htmlType="submit"
                    type="primary"
                    disabled={!dirty || isSubmitting}
                  >
                    {t('login:submit_login')}
                  </Button>
                </div>
              </form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}

export default Login;
