import { useQuery } from 'react-query';
import { BookMark } from '@/types/review';
import { fetcher } from '../fetcher';

type GetBookMarksResponse = {
  data: BookMark[];
};

const getBookMarks = async () => {
  const res = await fetcher.get<GetBookMarksResponse>('/review/score/all');
  return res.data.data;
};

export const useGetBookMarks = () => {
  const { data, isLoading, isError, refetch } = useQuery(['useGetBookMarks'], () => getBookMarks());

  return {
    universities: data,
    loading: isLoading,
    error: isError,
    refetch,
  };
};
