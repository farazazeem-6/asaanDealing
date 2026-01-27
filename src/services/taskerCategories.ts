import { axios } from '@/config';
import { SERVER_END_POINTS } from '@/constants';
import { QUERY_KEYS } from '@/utils/enums';
import { TTaskerCategoryResponse } from '@/utils/types';
import { useQuery } from '@tanstack/react-query';

export const useGetTaskerCategories = ({ enabled }: { enabled: boolean }) => {
  return useQuery({
    queryKey: [QUERY_KEYS.TASKER_CATEGORIES],
    queryFn: async (): Promise<TTaskerCategoryResponse> => {
      const response = await axios.get(SERVER_END_POINTS.TASKER_CATEGORIES);
      return response.data;
    },
    select: (response) => response?.data.categories,
    staleTime: 100 * 60 * 60,
    enabled,
  });
};
