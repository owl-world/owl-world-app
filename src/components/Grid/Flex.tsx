import React from 'react';
import { PropsWithChildren } from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';

export const Flex = ({ children, style, ...rest }: PropsWithChildren<ViewProps>) => (
  <View style={[styles.row, style]} {...rest}>
    {children}
  </View>
);

const styles = StyleSheet.create({
  row: {
    flex: 1,
  },
});
