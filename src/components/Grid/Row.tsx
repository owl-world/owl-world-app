import React from 'react';
import { PropsWithChildren } from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';

export const Row = ({ children, style, ...rest }: PropsWithChildren<ViewProps>) => (
  <View style={[styles.row, style]} {...rest}>
    {children}
  </View>
);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
});
