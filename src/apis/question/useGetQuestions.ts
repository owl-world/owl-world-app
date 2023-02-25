import { useQuery } from 'react-query';
import { QuestionResponse } from '@/types/qna';
import { fetcher } from '../fetcher';

type GetQuestionResponse = {
  data: QuestionResponse;
};

const getQuestions = async (universityId?: number) => {
  const res = await fetcher.get<GetQuestionResponse>('/question', {
    params: {
      universityId,
    },
  });
  return res.data.data;
};

export const useGetQuestions = (universityId?: number) => {
  const { data, isLoading, isError, refetch } = useQuery(['useGetQuestions'], () => getQuestions(universityId), {
    enabled: !!universityId,
  });

  return {
    questions: data?.questions,
    loading: isLoading,
    error: isError,
    refetch,
  };
};
