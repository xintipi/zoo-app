import { Form, Input } from 'antd';
import clsx from 'clsx';
import { ChangeEvent, FocusEventHandler, useState } from 'react';

import styles from './FormInput.module.scss';

interface IProps {
  name: string;
  label?: string;
  type?: string;
  errors?: any;
  touched?: any;
  value: string;
  placeholder?: string;
  onBlur: FocusEventHandler<HTMLInputElement> | undefined;
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
}

const FormInput = (props: IProps) => {
  const [value, setValue] = useState<string>(props.value || '');
  const { label, errors, name, touched, type, placeholder, onBlur, onChange } = props;

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setValue(evt.target.value);
    onChange(evt);
  };

  return (
    <div className={clsx(styles.formGroup)}>
      <div className={clsx(styles.formContent)}>
        {label && (
          <label className={clsx(styles.formLabel, { [styles.required]: label }, 'mb-4')}>
            {label}
          </label>
        )}
        <Form.Item
          validateStatus={errors[name] && touched[name] ? 'error' : ''}
          help={errors[name] && touched[name] ? errors[name] : ''}
        >
          {type === 'password' ? (
            <Input.Password
              name={name}
              value={value}
              placeholder={placeholder}
              onChange={handleChange}
              onBlur={onBlur}
            />
          ) : (
            <Input
              name={name}
              value={value}
              placeholder={placeholder}
              onChange={handleChange}
              onBlur={onBlur}
            />
          )}
        </Form.Item>
      </div>
    </div>
  );
};

export default FormInput;
