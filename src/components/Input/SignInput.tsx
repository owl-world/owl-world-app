import React from 'react';
import { StyleSheet, TextInputProps, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { height } from '@/utils/globalStyles';

export const SignInput = ({ ...rest }: TextInputProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholderTextColor={'#7D7D7D'}
        autoCapitalize="none"
        {...rest}
        style={[styles.input, rest.style]}
        multiline={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: height * 14,
    backgroundColor: '#FFFDF7',
    shadowColor: 'rgb(0,0,0)',
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    elevation: 4,
  },
  input: {
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 16,
    padding: 0,
  },
});
