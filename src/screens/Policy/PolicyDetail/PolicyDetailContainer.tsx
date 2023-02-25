import React from 'react';
import { useGetReviews, useGetReviewScores } from '@/apis/review';
import { useGetUniversity } from '@/apis/university';
import { RootStackScreenProps } from '@/screens/Stack/Stack';
import { useNavigation, useRoute } from '@react-navigation/native';
import { PolicyDetailPresenter } from './PolicyDetailPresenter';

type Navigation = RootStackScreenProps<'PolicyDetail'>['navigation'];
type Route = RootStackScreenProps<'PolicyDetail'>['route'];

export const PolicyDetailContainer = () => {
  const navigation = useNavigation<Navigation>();
  const route = useRoute<Route>();

  const { universityId, code } = route.params;
  const { universityMajor } = useGetUniversity(code);
  const { scores } = useGetReviewScores(universityId);

  const { reviews } = useGetReviews();

  const onPressQnA = (_universityId: number, _universityName: string) => {
    navigation.navigate('QnA', {
      universityId: _universityId,
      universityName: _universityName,
    });
  };

  if (!universityMajor) {
    return;
  }

  const props = {
    universityMajor,
    reviews,
    scores,
    onPressQnA,
  };

  return <PolicyDetailPresenter {...props} />;
};
