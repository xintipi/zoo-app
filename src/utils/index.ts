import type { Params } from 'react-router-dom'

export function convertPath(path: string, params: Params) {
  let _path = path
  if (!Object.keys(params).length) {
    return _path
  }
  Object.entries(params).forEach(([paramName, paramValue]) => {
    if (paramValue) {
      _path = _path.replace(paramValue, `:${paramName}`)
    }
  })
  return _path
}
