import React from 'react';
import { Image } from 'react-native';

type Props = {
  isFill?: boolean;
  size?: number;
};

export const Star = ({ isFill, size }: Props) => {
  const source = isFill ? require('@/assets/images/filled_star.png') : require('@/assets/images/star.png');
  const starStyle = {
    width: size,
    height: size,
  };

  return <Image style={starStyle} resizeMode="cover" source={source} />;
};
