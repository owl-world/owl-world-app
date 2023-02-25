import { useQuery } from 'react-query';
import { UniversityMajor } from '@/types/university';
import { fetcher } from '../fetcher';

type GetUniversityResponse = {
  data: UniversityMajor[];
};

const getUniversity = async (code: string) => {
  const res = await fetcher.get<GetUniversityResponse>(`/university/${code}/major`);
  return res.data.data;
};

export const useGetUniversity = (code: string) => {
  const { data, isLoading, isError, refetch } = useQuery(['useGetUniversity', code], () => getUniversity(code));

  return {
    universityMajor: data,
    loading: isLoading,
    error: isError,
    refetch,
  };
};
