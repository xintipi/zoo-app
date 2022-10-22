export interface IUserRoles {
  id: number
  name: string
}

export interface IUserProfile {
  data: any
  id: string
  code: string
  full_name: string
  nickname: string
  email: string
  level: number
  department_id?: string
  job_position_id?: string
  created_at: string
  updated_at: string
  deleted_at?: string
  roles?: IUserRoles[]
}
