import React, { useState } from 'react';
import { useGetQuestion, usePostAnswer } from '@/apis/question';
import { useAppSelector } from '@/hooks/redux';
import { RootStackScreenProps } from '@/screens/Stack/Stack';
import { useRoute } from '@react-navigation/native';
import { QnADetailPresenter } from './QnADetailPresenter';

type Route = RootStackScreenProps<'QnADetail'>['route'];

export type LikeType = 'like' | 'unLike';

export const QnADetailContainer = () => {
  const route = useRoute<Route>();

  const { questionId } = route.params;
  const { question } = useGetQuestion(questionId);
  const { mutateAsync: postAnswer } = usePostAnswer(questionId);
  const { member } = useAppSelector(selector => selector.auth);

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
