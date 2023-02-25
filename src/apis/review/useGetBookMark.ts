import { useQuery } from 'react-query';
import { BookMark } from '@/types/review';
import { fetcher } from '../fetcher';

type GetBookMarkResponse = {
  data: BookMark[];
};

const getBookMark = async (universityIds: number[]) => {
  const res = await fetcher.post<GetBookMarkResponse>('/review/score', {
    universityIds,
  });

  return res.data.data;
};

export const useGetBookMark = (universityIds: number[]) => {
  const { data, isLoading, isError, refetch } = useQuery(['useGetBookMark'], () => getBookMark(universityIds), {
    enabled: !!universityIds.length,
  });

  return {
    bookmarks: data,
    loading: isLoading,
    error: isError,
    refetch,
  };
};
