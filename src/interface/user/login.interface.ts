export interface ILoginRequest {
  username: string;
  password: string;
}

export interface IToken {
  data: any;
  token: string;
  type: string;
}
