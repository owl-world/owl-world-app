import React, { PropsWithChildren } from 'react';
import { StyleProp, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';
import { Text } from '../Text';

type Props = {
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
};

export const SubmitButton = ({ style, onPress, children }: PropsWithChildren<Props>) => (
  <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
    <Text style={styles.text}>{children}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    paddingVertical: 8,
    backgroundColor: '#FFE05C',
    shadowColor: 'rgb(0,0,0)',
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    elevation: 4,
  },
  text: {
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 15,
    textAlign: 'center',
  },
});
