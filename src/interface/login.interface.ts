export interface ILoginRequest {
  email: string
  password: string
}

export interface IToken {
  data: any
  token: string
  type: string
}
