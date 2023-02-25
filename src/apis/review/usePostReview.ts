import { useMutation } from 'react-query';
import { ReviewRequest } from '@/types/review';
import { fetcher } from '../fetcher';

const postReview = (ratings: ReviewRequest) => {
  return fetcher.post('/review', { scores: ratings });
};

export const usePostReview = () => {
  return useMutation({
    mutationFn: postReview,
  });
};
