import { useQuery } from 'react-query';
import { QuestionResponse } from '@/types/qna';
import { fetcher } from '../fetcher';

type GetQuestionResponse = {
  data: QuestionResponse;
};

const getQuestions = async () => {
  const res = await fetcher.get<GetQuestionResponse>('/question');
  return res.data.data;
};

export const useGetQuestions = () => {
  const { data, isLoading, isError, refetch } = useQuery(['useGetQuestions'], () => getQuestions());

  return {
    questions: data?.questions,
    loading: isLoading,
    error: isError,
    refetch,
  };
};
