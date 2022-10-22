import { Input } from 'antd'

import { IProps } from './FormInput'

const { Password } = Input

function TextField({ type, ...props }: IProps) {
  return type === 'password' ? <Password {...props} /> : <Input {...props} />
}

export default TextField
