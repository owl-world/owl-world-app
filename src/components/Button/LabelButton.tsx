import React, { PropsWithChildren } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from '../Text';

type Props = {
  color?: string;
  onPress: () => void;
};

export const LabelButton = ({ color = '#454545', onPress, children }: PropsWithChildren<Props>) => {
  const textColor = { color };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={[styles.text, textColor]}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: {
    color: '#454545',
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 15,
  },
});
