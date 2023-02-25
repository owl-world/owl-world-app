import React, { PropsWithChildren } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from '../Text';

export const Label = ({ children }: PropsWithChildren) => {
  return (
    <View style={styles.row}>
      <View style={styles.shadowContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{children}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  shadowContainer: {
    borderRadius: 5,
    backgroundColor: '#FFF9DC',
    shadowColor: 'rgb(0,0,0)',
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  textContainer: {
    overflow: 'hidden',
    alignItems: 'center',
  },
  text: {
    borderRadius: 5,
    paddingVertical: 3,
    paddingHorizontal: 5,
    overflow: 'hidden',
    color: '#383838',
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 12,
    textAlignVertical: 'center',
  },
});
