import React from 'react';
import { useGetReviews, useGetReviewScores } from '@/apis/review';
import { useGetUniversity } from '@/apis/university';
import { useNavigation, useRoute } from '@react-navigation/native';
import { MainStackScreenProps } from '../../Stack/MainStack';
import { PolicyDetailPresenter } from './PolicyDetailPresenter';

type Navigation = MainStackScreenProps<'PolicyDetail'>['navigation'];
type Route = MainStackScreenProps<'PolicyDetail'>['route'];

export const PolicyDetailContainer = () => {
  const navigation = useNavigation<Navigation>();
  const route = useRoute<Route>();

  const { universityId, code } = route.params;
  const { universityMajor } = useGetUniversity(code);
  const { scores } = useGetReviewScores(universityId);

  const { reviews } = useGetReviews();

  if (!universityMajor) {
    return;
  }

  const props = {
    universityMajor,
    reviews,
    scores,
  };

  return <PolicyDetailPresenter {...props} />;
};
