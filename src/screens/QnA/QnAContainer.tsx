import React, { useEffect } from 'react';
import { useGetQuestions } from '@/apis/question';
import { useAppSelector } from '@/hooks/redux';
import { useNavigation, useRoute } from '@react-navigation/native';
import { RootStackScreenProps } from '../Stack/Stack';
import { QnAPresenter } from './QnAPresenter';

type Navigation = RootStackScreenProps<'QnA'>['navigation'];
type Route = RootStackScreenProps<'QnA'>['route'];

export const QnAContainer = () => {
  const navigation = useNavigation<Navigation>();
  const route = useRoute<Route>();

  const { member } = useAppSelector(selector => selector.auth);

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
      universityName,
    });
  };

  const onPressWrite = () => {
    navigation.navigate('QnAWrite', {
      universityId,
      universityName,
    });
  };

  const props = {
    member,
    universityName,
    questions,
    onPressWrite,
    onPressQuestion,
  };

  return <QnAPresenter {...props} />;
};
