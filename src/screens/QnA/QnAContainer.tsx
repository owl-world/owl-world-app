import React, { useEffect } from 'react';
import { useGetQuestions } from '@/apis/question';
import { useNavigation } from '@react-navigation/native';
import { MainStackScreenProps } from '../Stack/MainStack';
import { QnAPresenter } from './QnAPresenter';

type Navigation = MainStackScreenProps<'QnA'>['navigation'];

export const QnAContainer = () => {
  const navigation = useNavigation<Navigation>();

  const { questions, refetch } = useGetQuestions();

  const onPressQuestion = (questionId: number) => {
    navigation.navigate('QnADetail', {
      questionId,
    });
  };

  const props = {
    questions,
    onPressQuestion,
  };

  useEffect(() => {
    navigation.addListener('focus', () => {
      refetch();
    });
  }, [navigation, refetch]);

  return <QnAPresenter {...props} />;
};
