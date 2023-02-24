import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

type Props = {
  onPress?: () => void;
};

export const WriteButton = ({ onPress }: Props) => {
  if (!onPress) {
    return null;
  }

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image resizeMode="cover" source={require('@/assets/images/pencil.png')} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderRadius: 10,
    shadowColor: 'rgb(0,0,0)',
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
});
