import PropTypes from 'prop-types';

import { useTranslateFormErrors } from '@/hooks';
import { ITranslateFormInterface } from '@/interface/translate-form.interface';

const WithTranslateFormErrors = ({
  errors,
  touched,
  setFieldTouched,
  children,
}: ITranslateFormInterface) => {
  useTranslateFormErrors({ errors, touched, setFieldTouched });
  return <>{children}</>;
};

WithTranslateFormErrors.propTypes = {
  form: PropTypes.object,
};

export default WithTranslateFormErrors;
