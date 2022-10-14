import { useAxios } from '@/hooks';
import { IResponseType } from '@/interface/axios/axios.interface';
import { ILoginRequest, IToken } from '@/interface/user/login.interface';
import { IUserProfile } from '@/interface/user/user.interface';

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
