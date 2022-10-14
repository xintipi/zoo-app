export interface IPaginationLink {
  next: string;
}

export interface IPagination {
  count: number | string;
  total: number | string;
  perPage: number | string;
  currentPage: number | string;
  totalPages: number | string;
  links: IPaginationLink;
}
