import React from 'react';
import { useGetQuestions } from '@/apis/question';
import { useNavigation } from '@react-navigation/native';
import { MainStackScreenProps } from '../Stack/MainStack';
import { QnAPresenter } from './QnAPresenter';

type Navigation = MainStackScreenProps<'QnA'>['navigation'];

export const QnAContainer = () => {
  const navigation = useNavigation<Navigation>();

  const { questions } = useGetQuestions();

  const onPressQuestion = (questionId: number) => {
    navigation.navigate('QnADetail', {
      questionId,
    });
  };

  const props = {
    questions,
    onPressQuestion,
  };

  return <QnAPresenter {...props} />;
};
