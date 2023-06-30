import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Text } from '../Text';

type Props = {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  onPressEnter: () => void;
};

export const CommentInput = ({ placeholder, value, onChange, onPressEnter }: Props) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={'#757575'}
        value={value}
        returnKeyType={'done'}
        onSubmitEditing={onPressEnter}
        onChangeText={text => onChange(text)}
      />
      <TouchableOpacity style={styles.button} onPress={onPressEnter}>
        <Text style={styles.buttonText}>입력</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#FFFBE8',
    borderRadius: 10,
    paddingVertical: 6,
    paddingLeft: 14,
    paddingRight: 8,
    elevation: 1.5,
  },
  input: {
    flex: 1,
    color: '#000000',
    paddingVertical: 0,
    fontSize: 13,
    fontWeight: '500',
    lineHeight: 15,
  },
  button: {
    paddingHorizontal: 10,
    paddingVertical: 9,
    backgroundColor: '#FFEC9A',
    borderRadius: 10,
    justifyContent: 'center',
  },
  buttonText: {
    alignSelf: 'center',
    color: '#444444',
  },
});
