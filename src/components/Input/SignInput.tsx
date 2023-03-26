import React from 'react';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';

export const SignInput = ({ ...rest }: TextInputProps) => {
  return (
    <TextInput placeholderTextColor={'#7D7D7D'} autoCapitalize="none" {...rest} style={[styles.input, rest.style]} />
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 16,
    borderRadius: 10,
    paddingVertical: 17,
    paddingHorizontal: 10,
    backgroundColor: '#FFFDF7',
    shadowColor: 'rgb(0,0,0)',
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    elevation: 4,
  },
});
