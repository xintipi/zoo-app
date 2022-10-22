import { lazy } from 'react'
import { RouteObject } from 'react-router-dom'

import WrapperRoute from '@/router/guards/WrapperRoute'

const Error403Page = lazy(() => import('@/pages/Error403/Error403'))

const forbiddenPage: RouteObject = {
  path: '403',
  element: <WrapperRoute title="title:403" element={<Error403Page />} />,
}

export default forbiddenPage
