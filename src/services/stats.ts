import { axios } from '@/config';
import { SERVER_END_POINTS } from '@/constants';
import { QUERY_KEYS } from '@/utils/enums';
import { TPlatformStats } from '@/utils/types';
import { useQuery } from '@tanstack/react-query';

export const useGetPlatformStats = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.PLATFORM_STATS],
    queryFn: () =>
      axios.get<{
        userStats: TPlatformStats;
      }>(SERVER_END_POINTS.PLATFORM_STATS),

    select: (response) => response?.data?.userStats,
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: true,
  });
};
