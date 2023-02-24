import React from 'react';
import { Image, ImageSourcePropType, StyleSheet } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Text } from '../Text';

type Props = {
  title: string;
  source: ImageSourcePropType;
  count?: number;
  onPress: () => void;
};

export const Menu = ({ title, source, count, onPress }: Props) => {
  return (
    <TouchableWithoutFeedback style={styles.container} onPress={onPress}>
      <Image resizeMode="cover" source={source} />
      <Text style={styles.title}>{title}</Text>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {},
  title: {
    color: '#2E2E2E',
    fontSize: 14,
    lineHeight: 17,
    textAlign: 'center',
  },
});
