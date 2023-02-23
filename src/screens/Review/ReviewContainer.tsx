import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { MainStackScreenProps } from '../Stack/MainStack';
import { ReviewPresenter } from './ReviewPresenter';

type Navigation = MainStackScreenProps<'Review'>['navigation'];

export const ReviewContainer = () => {
  const navigation = useNavigation<Navigation>();

  const props = {};

  return <ReviewPresenter {...props} />;
};
