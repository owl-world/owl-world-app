import React, { useCallback, useState } from 'react';
import { useGetReviews, usePostReview } from '@/apis/review';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { updateStandingWater } from '@/slices/auth';
import { useNavigation } from '@react-navigation/native';
import { MainStackScreenProps } from '../Stack/MainStack';
import { ReviewPresenter } from './ReviewPresenter';

type Navigation = MainStackScreenProps<'Review'>['navigation'];

export const ReviewContainer = () => {
  const dispatch = useAppDispatch();

  const navigation = useNavigation<Navigation>();
  const { member } = useAppSelector(selector => selector.auth);

  const { reviews } = useGetReviews();
  const { mutateAsync: postReview } = usePostReview();

  const [ratings, setRatings] = useState<number[]>([0, 0, 0, 0, 0, 0]);

  const onChange = useCallback((key: number, value: number) => {
    setRatings(prev => {
      const newRating = [...prev];
      newRating[key] = value;
      return newRating;
    });
  }, []);

  const findRatingByReviewId = (idx: number) => ratings[idx];

  const onPressSubmit = async () => {
    await postReview(ratings, {
      onSuccess: async () => {
        await setStandingWater();
        goNavHome();
      },
    });
  };

  const goNavHome = () => navigation.navigate('Home');

  const setStandingWater = async () => {
    dispatch(updateStandingWater());
  };

  if (!reviews) {
    return null;
  }

  const props = {
    member,
    reviews,
    findRatingByReviewId,
    onChange,
    onPressSubmit,
  };

  return <ReviewPresenter {...props} />;
};
