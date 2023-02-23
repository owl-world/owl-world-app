import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SplitRow } from '../SplitSpace';
import { Stars } from '../Star/Stars';
import { Text } from '../Text';

type Props = {
  review: string;
};

export const Review = ({ review }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{review}</Text>
      <SplitRow height={11} />
      <View style={styles.starContainer}>
        <Stars rating={3} />
      </View>
      <SplitRow height={5} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  text: {
    color: '#2C2C2C',
    fontSize: 13,
    fontWeight: '500',
    lineHeight: 15,
    textAlign: 'center',
  },
  starContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
