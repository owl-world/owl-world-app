import { useQuery } from 'react-query';
import { Review } from '@/types/review';
import { fetcher } from '../fetcher';

type GetReviewsResponse = {
  data: Review[];
};

const getReviews = async () => {
  const res = await fetcher.get<GetReviewsResponse>('/review/question');
  return res.data.data;
};

export const useGetReviews = () => {
  const { data, isLoading, isError, refetch } = useQuery(['useGetReviews'], () => getReviews());

  return {
    reviews: data,
    loading: isLoading,
    error: isError,
    refetch,
  };
};
