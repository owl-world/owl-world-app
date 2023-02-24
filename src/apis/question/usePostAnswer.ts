import { useMutation, useQueryClient } from 'react-query';
import { AnswerRequest } from '@/types/qna';
import { fetcher } from '../fetcher';

const postAnswer = ({ questionId, answer }: AnswerRequest) => {
  return fetcher.post('/answer', {
    questionId,
    content: answer,
  });
};

export const usePostAnswer = (questionId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postAnswer,
    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: ['useGetQuestion', questionId],
      });
    },
  });
};
