import { axios } from '@/config';
import { SERVER_END_POINTS } from '@/constants';
import { QUERY_KEYS } from '@/utils/enums';
import { TPlatformStatsResponse } from '@/utils/types';
import { useQuery } from '@tanstack/react-query';

export const useGetPlatformStats = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.PLATFORM_STATS],
    queryFn: () =>
      axios.get<TPlatformStatsResponse>(SERVER_END_POINTS.PLATFORM_STATS),

    select: (response) => response.data.data.userStats,
    staleTime: 3 * 60 * 60 * 1000,
    refetchOnWindowFocus: true,
    retry: 2,
    retryDelay: (attempt) => Math.min(1000 * 2 ** attempt, 30_000),
  });
};
