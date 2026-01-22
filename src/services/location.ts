import { axios } from '@/config';
import { SERVER_END_POINTS } from '@/constants';
import { QUERY_KEYS } from '@/utils/enums';
import { TCityResponse, TStateResponse, TTownResponse } from '@/utils/types';
import { useQuery } from '@tanstack/react-query';

export const useStateListing = (slug: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.STATE_LISTING, slug],
    queryFn: () =>
      axios.get<TStateResponse>(`${SERVER_END_POINTS.STATE}${slug}`),
    select: (response) => response.data.states,
    enabled: !!slug,
    staleTime: 1000 * 60 * 5,
  });
};
export const useCityListing = (slug: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.CITY_LISTING, slug],
    queryFn: () => axios.get<TCityResponse>(`${SERVER_END_POINTS.CITY}${slug}`),
    select: (response) => response.data.cities,
    enabled: !!slug,
    staleTime: 1000 * 60 * 5,
  });
};
export const useTownListing = (slug: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.TOWN_LISTING, slug],
    queryFn: () => axios.get<TTownResponse>(`${SERVER_END_POINTS.TOWN}${slug}`),
    select: (response) => response.data.towns,
    enabled: !!slug,
    staleTime: 1000 * 60 * 5,
  });
};
