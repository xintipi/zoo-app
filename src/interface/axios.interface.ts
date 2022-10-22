import { IPagination } from '@/interface/pagination.interface'

export interface IResponseType<P = Record<string, any>> {
  status: number
  success: boolean
  data: P
}

export interface IResponseTypePaginate<P> {
  status: number
  success: boolean
  data: P
  pagination: IPagination
}
