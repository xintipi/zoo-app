import { lazy } from 'react'
import { RouteObject } from 'react-router-dom'

import WrapperRoute from '@/router/guards/WrapperRoute'

const Error404Page = lazy(() => import('@/pages/Error404/Error404'))

const pageNotFound: RouteObject = {
  path: '404',
  element: <WrapperRoute title="title:404" element={<Error404Page />} />,
}

export default pageNotFound
