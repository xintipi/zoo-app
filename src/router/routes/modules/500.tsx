import { lazy } from 'react'
import { RouteObject } from 'react-router-dom'

import WrapperRoute from '@/router/guards/WrapperRoute'

const Error500Page = lazy(() => import('@/pages/Error500/Error500'))

const pageNotFound: RouteObject = {
  path: '500',
  element: <WrapperRoute title="title:500" element={<Error500Page />} />,
}

export default pageNotFound
