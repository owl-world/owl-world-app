import React from 'react';
import { PropsWithChildren } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView, SafeAreaViewProps } from 'react-native-safe-area-context';

export const SafreAreaFlexView = ({ children, style, ...rest }: PropsWithChildren<SafeAreaViewProps>) => (
  <SafeAreaView style={[styles.row, style]} {...rest}>
    {children}
  </SafeAreaView>
);

const styles = StyleSheet.create({
  row: {
    flex: 1,
  },
});
