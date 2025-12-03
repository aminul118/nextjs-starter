import serverFetch from '@/lib/server-fetch';
import { ApiResponse, IUser } from '@/types';

const getAllUsers = async (query?: Record<string, string>) => {
  const { data, meta } = await serverFetch.get<ApiResponse<IUser[]>>(
    '/user/all-users',
    { query },
  );
  return {
    data,
    meta,
  };
};

export { getAllUsers };
