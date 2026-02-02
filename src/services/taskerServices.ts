import { axios } from '@/config';
import { SERVER_END_POINTS } from '@/constants';
import { generateUrlParams } from '@/utils';
import { QUERY_KEYS } from '@/utils/enums';
import { TGetTaskerServices, TTaskerService } from '@/utils/types';
import { useQuery } from '@tanstack/react-query';

export const useGetTaskerByServices = ({
  serviceIds,
  enabled,
}: TGetTaskerServices & { enabled?: boolean }) => {
  return useQuery({
    queryKey: [QUERY_KEYS.TASKER_LISTING, serviceIds],
    queryFn: async () => {
      const params = {
        ...(serviceIds && { serviceIds }),
      };
      return await axios.get(
        `${SERVER_END_POINTS.TASKER_SERVICES_LISTING}?${generateUrlParams(params)}`,
      );
    },
    select: (response) =>
      response?.data?.data.taskersServices as TTaskerService[],
    enabled,
  });
};
