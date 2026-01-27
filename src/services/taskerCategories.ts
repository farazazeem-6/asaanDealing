import { axios } from '@/config';
import { SERVER_END_POINTS } from '@/constants';
import { QUERY_KEYS } from '@/utils/enums';
import { TApiResponse, TTaskerCategory } from '@/utils/types';
import { useQuery } from '@tanstack/react-query';

export const useGetTaskerCategories = ({ enabled }: { enabled: boolean }) => {
  return useQuery({
    queryKey: [QUERY_KEYS.TASKER_CATEGORIES],
    queryFn: async (): Promise<
      TApiResponse<{ categories: TTaskerCategory[] }>
    > => {
      return await axios.get(SERVER_END_POINTS.TASKER_CATEGORIES);
    },
    staleTime: 100 * 60 * 60,
    enabled,
    select: (response) => {
      return response?.data?.categories;
    },
  });
};
