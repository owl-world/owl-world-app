import React, { PropsWithChildren } from 'react';
import { StyleProp, StyleSheet, TextStyle, View, ViewStyle } from 'react-native';
import { Text } from '../Text';

type Props = {
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

export const Label = ({ containerStyle, textStyle, children }: PropsWithChildren<Props>) => {
  return (
    <View style={styles.row}>
      <View style={[styles.shadowContainer, containerStyle]}>
        <View style={styles.textContainer}>
          <Text style={[styles.text, textStyle]}>{children}</Text>
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
    elevation: 4,
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
