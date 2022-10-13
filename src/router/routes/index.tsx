import { forEach, keys } from 'lodash-es';
import { Navigate, RouteObject } from 'react-router-dom';

import Default from '@/layouts/Default/Default';
import Dashboard from '@/pages/Dashboard/Dashboard';
import WrapperRoute from '@/router/guards/WrapperRoute';

const modules = import.meta.globEager('./modules/**/*.tsx') as any;
const routeModuleList: RouteObject[] = [];

forEach(keys(modules), (key) => {
  const mod = modules[key]?.default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routeModuleList.push(...modList);
});

export const rootRoute: RouteObject = {
  path: '/',
  element: <Default />,
  children: [
    {
      path: '',
      element: <Navigate to="dashboard" />,
    },
    {
      path: 'dashboard',
      element: <WrapperRoute element={<Dashboard />} guard="auth" auth />,
    },
  ],
};

export const exceptionRoute: RouteObject = {
  path: '*',
  element: <WrapperRoute title="title:404" element={<Navigate to="404" replace />} />,
};

// Basic routing without permission
export const routeLists = [rootRoute, exceptionRoute, ...routeModuleList];
