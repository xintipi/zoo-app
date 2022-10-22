import { forEach, keys } from 'lodash'
import { Navigate, RouteObject } from 'react-router-dom'

import Default from '@/layouts/Default/Default'
import Dashboard from '@/pages/Dashboard/Dashboard'
import Profile from '@/pages/Profile/Profile'
import WrapperRoute from '@/router/guards/WrapperRoute'

const modules = import.meta.globEager('./modules/**/*.tsx') as any
const routeModuleList: RouteObject[] = []

forEach(keys(modules), (key) => {
  const mod = modules[key]?.default || {}
  const modList = Array.isArray(mod) ? [...mod] : [mod]
  routeModuleList.push(...modList)
})

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
      element: <WrapperRoute element={<Dashboard />} title="title:dashboard" guard="auth" auth />,
    },
    {
      path: 'profile',
      element: <WrapperRoute element={<Profile />} title="title:profile" guard="auth" auth />,
    },
  ],
}

export const exceptionRoute: RouteObject = {
  path: 'setting',
  element: <Navigate to="staff" />,
}

// Basic routing without permission
export const routeLists = [rootRoute, exceptionRoute, ...routeModuleList]
