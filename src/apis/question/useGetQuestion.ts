import { useQuery } from 'react-query';
import { Question } from '@/types/qna';
import { fetcher } from '../fetcher';

type GetQuestionResponse = {
  data: Question;
};

const getQuestion = async (questionId: number) => {
  const res = await fetcher.get<GetQuestionResponse>(`/question/${questionId}`);
  return res.data.data;
};

export const useGetQuestion = (questionId: number) => {
  const { data, isLoading, isError, refetch } = useQuery(['useGetQuestion', questionId], () => getQuestion(questionId));

  return {
    question: data,
    loading: isLoading,
    error: isError,
    refetch,
  };
};
