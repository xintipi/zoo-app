import { Form } from 'antd'
import clsx from 'clsx'
import { ChangeEvent, FocusEventHandler, useState } from 'react'

import TextField from './TextField'

const { Item } = Form

export interface IProps {
  className?: string
  name: string
  label?: string
  type?: string
  errors?: any
  touched?: any
  value: string
  placeholder?: string
  onBlur: FocusEventHandler<HTMLInputElement> | undefined
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void
}

const FormInput = (props: IProps) => {
  const [value, setValue] = useState<string | ''>(props.value || '')
  const { label, errors, name, touched, type, placeholder, onBlur, onChange } = props

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setValue(evt.target.value)
    onChange(evt)
  }

  return (
    <div className="max-w-sm">
      <div>
        {label && (
          <label
            className={clsx(
              'block',
              'mb-1',
              'text-skin-dark-1',
              'text-opacity-[0.85]',
              label && "after:content-['*'] after:ml-[0.25rem] after:text-skin-red"
            )}>
            {label}
          </label>
        )}
        <Item
          className="field-item"
          validateStatus={Boolean(errors) && touched ? 'error' : ''}
          help={Boolean(errors) && touched ? errors : ''}>
          <TextField
            type={type as string}
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={handleChange}
            onBlur={onBlur}
          />
        </Item>
      </div>
    </div>
  )
}

FormInput.defaultProps = {
  type: 'text',
}

export default FormInput
