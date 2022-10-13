import { RouteObject } from 'react-router-dom';

import Login from '@/pages/Login/Login';
import WrapperRoute from '@/router/guards/WrapperRoute';

const login: RouteObject = {
  path: 'login',
  element: <WrapperRoute title="title:login" guard="login" element={<Login />} auth />,
};

export default login;
