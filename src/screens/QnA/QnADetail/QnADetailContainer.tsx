import React, { useState } from 'react';
import { useGetQuestion, usePostAnswer } from '@/apis/question';
import { MainStackScreenProps } from '@/screens/Stack/MainStack';
import { useRoute } from '@react-navigation/native';
import { QnADetailPresenter } from './QnADetailPresenter';

type Route = MainStackScreenProps<'QnADetail'>['route'];

export type LikeType = 'like' | 'unLike';

export const QnADetailContainer = () => {
  const route = useRoute<Route>();

  const { questionId } = route.params;
  const { question } = useGetQuestion(questionId);
  const { mutateAsync } = usePostAnswer(questionId);

  const [answer, setAnswer] = useState('');

  const onPressLike = (type: LikeType) => {
    // No API
  };

  const onChange = (value: string) => {
    setAnswer(value);
  };

  const onPressEnter = async () => {
    if (!answer.trim()) {
      return;
    }

    await mutateAsync(
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
    question,
    answer,
    onPressLike,
    onChange,
    onPressEnter,
  };

  return <QnADetailPresenter {...props} />;
};
