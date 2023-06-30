import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { SplitColumn } from '../SplitSpace';

type Props = {
  title: string;
  onPressPrev?: () => void;
};

export const SearchHeader = ({ title, onPressPrev }: Props) => {
  const navigation = useNavigation();

  const onPressPrevButton = () => {
    if (onPressPrev) {
      onPressPrev();
    }

    navigation.goBack();
  };

  return (
    <View style={[styles.container, styles.row]}>
      <TouchableOpacity onPress={onPressPrevButton}>
        <Image resizeMode="cover" source={require('@/assets/images/prev.png')} />
      </TouchableOpacity>
      <SplitColumn width={9} />
      <TextInput
        style={styles.searchInput}
        placeholder={'검색어를 입력해주세요'}
        placeholderTextColor={'#000000'}
        value={title}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  container: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
  },
  searchInput: {
    flex: 1,
    paddingVertical: 0,
    color: '#000000',
    fontSize: 17,
    fontWeight: '500',
    lineHeight: 20,
  },
  cancleButton: {
    alignItems: 'flex-end',
    paddingRight: 10,
  },
});
