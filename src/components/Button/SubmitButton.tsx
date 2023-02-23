import React, { PropsWithChildren } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from '../Text';

type Props = {
  onPress: () => void;
};

export const SubmitButton = ({ onPress, children }: PropsWithChildren<Props>) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <Text style={styles.text}>{children}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    paddingVertical: 7,
    backgroundColor: '#FFE05C',
    shadowColor: 'rgb(0,0,0)',
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  text: {
    textAlign: 'center',
  },
});
