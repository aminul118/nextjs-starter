import { apiGet } from '@/lib/apiClient';
import { ApiResponse, ITeamMembers } from '@/types';

export async function getAllTeamMembers(params?: Record<string, any>) {
  return await apiGet<ApiResponse<ITeamMembers[]>>('/team/get-all', params);
}
