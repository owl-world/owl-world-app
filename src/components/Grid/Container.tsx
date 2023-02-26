import React from 'react';
import { PropsWithChildren } from 'react';
import { View, ViewProps } from 'react-native';

type Props = ViewProps & {
  paddingHorizontal?: number;
  paddingVertical?: number;
};

export const Container = ({ children, paddingHorizontal, paddingVertical, ...rest }: PropsWithChildren<Props>) => {
  const styles = {
    paddingHorizontal,
    paddingVertical,
  };

  return (
    <View style={styles} {...rest}>
      {children}
    </View>
  );
};
