import React, { useState } from 'react';
import { usePostLike, usePostUnLike } from '@/apis/like';
import { useGetQuestion, usePostAnswer } from '@/apis/question';
import { useAppSelector } from '@/hooks/redux';
import { RootStackScreenProps } from '@/screens/Stack/Stack';
import { useRoute } from '@react-navigation/native';
import { QnADetailPresenter } from './QnADetailPresenter';

type Route = RootStackScreenProps<'QnADetail'>['route'];

export const QnADetailContainer = () => {
  const route = useRoute<Route>();

  const { questionId } = route.params;
  const { member } = useAppSelector(selector => selector.auth);
  const { question, refetch: refetchQuestion } = useGetQuestion(questionId);

  const { mutateAsync: like, isLoading: isPostLikeLoading } = usePostLike();
  const { mutateAsync: unLike, isLoading: isPostUnLikeLoading } = usePostUnLike();
  const { mutateAsync: postAnswer } = usePostAnswer(questionId);

  const [answer, setAnswer] = useState('');

  const onPressLike = async (liked: boolean, answerId: number) => {
    if (isPostLikeLoading || isPostUnLikeLoading) {
      return;
    }

    const targetId = answerId;
    const type = 'answer';

    if (liked) {
      await unLike({ targetId, type });
    } else {
      await like({ targetId, type });
    }

    refetchQuestion();
  };

  const onChange = (value: string) => {
    setAnswer(value);
  };

  const onPressEnter = async () => {
    if (!answer.trim()) {
      return;
    }

    await postAnswer(
      { questionId, answer },
      {
        onSuccess: () => {
          setAnswer('');
        },
      }
    );
  };

  if (!question) {
    return null;
  }

  const props = {
    member,
    question,
    answer,
    onPressLike,
    onChange,
    onPressEnter,
  };

  return <QnADetailPresenter {...props} />;
};
