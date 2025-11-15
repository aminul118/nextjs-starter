export interface IMeta {
  page: number;
  limit: number;
  total: number;
  totalPage: number;
}
export interface ApiResponse<T> {
  message: string;
  statusCode: number;
  success: boolean;
  data: T;
  meta?: IMeta;
}
