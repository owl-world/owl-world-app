import React, { useEffect } from 'react';
import { useGetQuestions } from '@/apis/question';
import { useNavigation, useRoute } from '@react-navigation/native';
import { MainStackScreenProps } from '../Stack/MainStack';
import { QnAPresenter } from './QnAPresenter';

type Navigation = MainStackScreenProps<'QnA'>['navigation'];
type Route = MainStackScreenProps<'QnA'>['route'];

export const QnAContainer = () => {
  const navigation = useNavigation<Navigation>();
  const route = useRoute<Route>();

  const { universityId, universityName } = route.params;
  const { questions, refetch } = useGetQuestions(universityId);

  useEffect(() => {
    navigation.addListener('focus', () => {
      refetch();
    });
  }, [navigation, refetch]);

  const onPressQuestion = (questionId: number) => {
    navigation.navigate('QnADetail', {
      questionId,
    });
  };

  const onPressWrite = () => {
    navigation.navigate('QnAWrite', {
      universityId,
      universityName,
    });
  };

  const props = {
    universityName,
    questions,
    onPressWrite,
    onPressQuestion,
  };

  return <QnAPresenter {...props} />;
};
