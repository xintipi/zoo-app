import { FormikErrors, FormikTouched } from 'formik';
import { ReactElement } from 'react';

export interface ITranslateForm {
  errors: FormikErrors<any>;
  touched: FormikTouched<any>;
  setFieldTouched: (field: string) => void;
  children?: ReactElement;
}
