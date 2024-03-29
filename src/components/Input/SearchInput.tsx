import React from 'react';
import { Image, StyleSheet, TextInput, TextInputProps, TouchableOpacity, View } from 'react-native';

type Props = TextInputProps & {
  onPressSearch: () => void;
};

export const SearchInput = ({ onPressSearch, ...rest }: Props) => {
  return (
    <View style={styles.container}>
      <TextInput placeholderTextColor={'#7D7D7D'} autoCapitalize="none" {...rest} style={[styles.input, rest.style]} />
      <TouchableOpacity onPress={onPressSearch}>
        <Image style={styles.icon} resizeMode="cover" source={require('@/assets/images/search.png')} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    shadowColor: 'rgb(0,0,0)',
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    elevation: 4,
  },
  input: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 19,
    padding: 0,
    flex: 1,
  },
  icon: {
    width: 30,
    height: 30,
  },
});
