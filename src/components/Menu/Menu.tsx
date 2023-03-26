import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from '../Text';

type Props = {
  title: string;
  source: ImageSourcePropType;
  count?: number;
  onPress: () => void;
};

export const Menu = ({ title, source, onPress }: Props) => {
  return (
    <TouchableOpacity activeOpacity={1.0} style={styles.container} onPress={onPress}>
      <View>
        <Image resizeMode="cover" source={source} />
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
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
