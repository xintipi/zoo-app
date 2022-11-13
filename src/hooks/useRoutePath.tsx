import type { Location, Params } from 'react-router-dom'

import { convertPath } from '@/utils'

const UseRoutePath = (location: Location, params: Params): string => {
  return convertPath(location.pathname, params)
}

export default UseRoutePath
