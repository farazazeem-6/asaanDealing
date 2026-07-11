import { axios } from '@/config';
import { SERVER_END_POINTS } from '@/constants';
import { QUERY_KEYS } from '@/utils/enums';
import { TServicesResponseData, TTaskerCategory } from '@/utils/types';
import { useQuery } from '@tanstack/react-query';

//fetch all categories
export const useGetTaskerCategories = ({ enabled }: { enabled: boolean }) => {
  return useQuery({
    queryKey: [QUERY_KEYS.TASKER_CATEGORIES],
    queryFn: async () => {
      return await axios.get(SERVER_END_POINTS.TASKER_CATEGORIES);
    },
    select: (response) => response?.data?.data.categories as TTaskerCategory[],
    staleTime: 1000 * 60 * 60,
    enabled,
  });
};

//fetch all the services by category or without category
export const useGetServicesByCategory = ({ enabled }: { enabled: boolean }) => {
  return useQuery({
    queryKey: [QUERY_KEYS.SERVICES_BY_CATEGORY],
    queryFn: async () => {
      return await axios.get(SERVER_END_POINTS.SERVICES);
    },
    select: (response) => {
      const servicesListing = response?.data?.data
        ?.services as TServicesResponseData;

      if (!servicesListing) return [];

      // If data type is Object then convert it into Array
      if (
        typeof servicesListing === 'object' &&
        !Array.isArray(servicesListing)
      ) {
        return Object.values(servicesListing).flat();
      }
      // If the data is already in Array form then pass as it is
      return Array.isArray(servicesListing) ? servicesListing : [];
    },
    enabled,
  });
};
