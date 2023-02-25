import { useQuery } from 'react-query';
import { fetcher } from '../fetcher';

type GetReviewScoresResponse = {
  data: number[];
};

const getReviewScores = async (universityId: number) => {
  const res = await fetcher.get<GetReviewScoresResponse>(`/review/score/${universityId}`);
  return res.data.data;
};

export const useGetReviewScores = (universityId: number) => {
  const { data, isLoading, isError, refetch } = useQuery(['useGetReviewScores', universityId], () =>
    getReviewScores(universityId)
  );

  return {
    scores: data,
    loading: isLoading,
    error: isError,
    refetch,
  };
};
