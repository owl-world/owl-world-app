import React, { useCallback, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { MainStackScreenProps } from '../Stack/MainStack';
import { ReviewPresenter } from './ReviewPresenter';

type Navigation = MainStackScreenProps<'Review'>['navigation'];

const reviews = [
  { id: 1, review: '우리 학교 시설은 충분하다.' },
  { id: 2, review: '학과 내 분위기가 좋다.' },
  { id: 3, review: '커리큘럼이 잘 짜여있다.' },
  { id: 4, review: '학교에서 재직자를 배려해 다니는 것에 어려움이 없다.' },
  { id: 5, review: '수업과 과제의 난이도가 적당하다.' },
  { id: 6, review: '나는 우리 학교에 다니는 것이 자랑스럽다.' },
];

export const ReviewContainer = () => {
  const navigation = useNavigation<Navigation>();

  const [ratings, setRatings] = useState<any>({});

  const onChange = useCallback(
    (key: number, value: number) => {
      setRatings({ ...ratings, [key]: value });
    },
    [ratings]
  );

  const findRatingByReviewId = (reviewId: number) => ratings[reviewId];

  const onPressSubmit = () => {
    goNavHome();
  };

  const goNavHome = () => navigation.navigate('Home');

  const props = {
    reviews,
    findRatingByReviewId,
    onChange,
    onPressSubmit,
  };

  return <ReviewPresenter {...props} />;
};
