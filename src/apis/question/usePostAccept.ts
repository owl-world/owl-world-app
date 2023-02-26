import { useMutation } from 'react-query';
import { fetcher } from '../fetcher';

const postAccept = (answerId: number) => {
  return fetcher.post(`/answer/accept/${answerId}`);
};

export const usePostAccept = () => {
  return useMutation({
    mutationFn: postAccept,
  });
};
