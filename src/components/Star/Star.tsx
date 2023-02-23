import React from 'react';
import { Image } from 'react-native';

type Props = {
  isFill?: boolean;
};

export const Star = ({ isFill }: Props) => {
  const source = isFill ? require('@/assets/images/filled_star.png') : require('@/assets/images/star.png');

  return <Image resizeMode="cover" source={source} />;
};
