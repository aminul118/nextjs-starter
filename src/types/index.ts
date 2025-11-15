export type { MenuGroup } from './admin-menu';
export type { ApiResponse, IMeta } from './api.types';
export type { MetaConfig, MetaProps, Routes } from './meta.types';
export type { Auth, IUser } from './user.types';

export type {
  DivProps,
  IChildren,
  IGlobalError,
  IParams,
  ISearchParams,
  SectionProps,
} from './next.types';

export interface IModal {
  open: boolean;
  setOpen: (open: boolean) => void;
}
