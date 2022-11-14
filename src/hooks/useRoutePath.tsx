import type { Location, Params } from 'react-router-dom'

import { convertPath } from '@/utils'

const useRoutePath = (location: Location, params: Params): string => {
  return convertPath(location.pathname, params)
}

export default useRoutePath
