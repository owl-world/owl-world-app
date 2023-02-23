import React from 'react';
import { View } from 'react-native';

interface Prop {
  width: number;
}

export const SplitColumn = ({ width }: Prop) => {
  const style = { width };
  return <View style={style} />;
};
