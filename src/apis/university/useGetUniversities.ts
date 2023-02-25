import { useQuery } from 'react-query';
import { University } from '@/types/university';
import { fetcher } from '../fetcher';

type GetUniversitiesResponse = {
  data: University[];
};

const getUniversities = async () => {
  const res = await fetcher.get<GetUniversitiesResponse>('/university/all');
  return res.data.data;
};

export const useGetUniversities = () => {
  const { data, isLoading, isError, refetch } = useQuery(['useGetUniversities'], () => getUniversities());

  return {
    universities: data,
    loading: isLoading,
    error: isError,
    refetch,
  };
};
