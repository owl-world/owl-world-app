import React from 'react';
import { View } from 'react-native';

interface Prop {
  height: number;
}

export const SplitRow = ({ height }: Prop) => {
  const style = { height };
  return <View style={style} />;
};
