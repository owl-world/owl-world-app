import { useMutation, useQueryClient } from 'react-query';
import { QuestionRequest } from '@/types/qna';
import { fetcher } from '../fetcher';

const postQuestion = ({ universityId, content }: QuestionRequest) => {
  return fetcher.post('/question', {
    universityId,
    content,
  });
};

export const usePostQuestion = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postQuestion,
    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: ['useGetQuestions'],
      });
    },
  });
};
