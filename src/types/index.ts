export type { MetaProps, Routes } from './meta.types';
export type {
  DivProps,
  IChildren,
  IGlobalError,
  IParams,
  SectionProps,
} from './react.types';

export type { ITeamMembers } from './apiData.types';

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
export interface ISearchParams {
  searchParams: Promise<Record<string, string>>;
}
