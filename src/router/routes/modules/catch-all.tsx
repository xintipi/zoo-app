import { Navigate, RouteObject } from 'react-router-dom'

const catchAll: RouteObject = {
  path: '*',
  element: <Navigate to="404" replace />,
}

export default catchAll
