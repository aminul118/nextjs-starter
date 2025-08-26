export type { MetaProps, Routes } from './meta.types';
export type { IChildren, IGlobalError, IParams } from './react.types';

export interface ApiResponse<T> {
  message: string;
  statusCode: number;
  success: boolean;
  data: T;
}
