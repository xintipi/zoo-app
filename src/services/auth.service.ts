import { useAxios } from '@/hooks';
import { ILoginRequest, IToken, IUserProfile } from '@/types/auth';
import { IResponseType } from '@/types/axios';

const { Get, Post, Delete } = useAxios();

const baseUrl = '/auth';

export const Auth = {
  async login(data: ILoginRequest) {
    return await Post<IResponseType<IToken>>(`${baseUrl}/login`, data).then(
      (resp) => resp.data,
    );
  },

  async logout() {
    return await Delete(`${baseUrl}/logout`).then((resp) => resp.data);
  },

  async profile(data: any) {
    return await Get<IResponseType<IUserProfile>>(`${baseUrl}/profile`, data).then(
      (resp) => resp.data,
    );
  },
};
