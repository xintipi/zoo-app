import type { Location, Params } from 'react-router-dom'

const UseRoutePath = (location: Location, params: Params): string => {
  const { pathname } = location

  if (!Object.keys(params).length) {
    return pathname // we don't need to replace anything
  }

  let path = pathname
  Object.entries(params).forEach(([paramName, paramValue]) => {
    if (paramValue) {
      path = path.replace(paramValue, `:${paramName}`)
    }
  })
  return path
}

export default UseRoutePath
