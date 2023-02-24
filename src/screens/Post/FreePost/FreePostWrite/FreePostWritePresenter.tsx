import React from 'react';
import { Dimensions, SafeAreaView, StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { SvgCssUri } from 'react-native-svg';
import { WriteButton } from '@/components/Button';
import { Header } from '@/components/Header';
import { SplitColumn, SplitRow } from '@/components/SplitSpace';
import { Text } from '@/components/Text';
import { PostRequest } from '@/types/post';

const { height } = Dimensions.get('screen');

type Props = {
  onChange: (key: keyof PostRequest, value: string) => void;
  onPressWrite: () => void;
};

export const FreePostWritePresenter = ({ onChange, onPressWrite }: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="자유게시판" subTitle="올빼미광장" />

      <SplitRow height={30} />

      <View style={[styles.titleContainer, styles.row]}>
        <View style={[styles.row, styles.leftTitle]}>
          <SvgCssUri
            style={styles.universityLogo}
            uri={'https://kr.object.ncloudstorage.com/owls/logo/%EC%88%AD%EC%8B%A4%EB%8C%80%EC%9E%90%EC%82%B0%201.svg'}
          />
          <SplitColumn width={5} />
          <View>
            <Text style={styles.ninckname}>인하대학교 곰돌이</Text>
            <Text style={styles.createdAt}>02/20 21:37</Text>
          </View>
        </View>
        <WriteButton onPress={onPressWrite} />
      </View>

      <SplitRow height={15} />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.titleInput}
          placeholder="제목을 입력하세요."
          placeholderTextColor={'#262626'}
          onChangeText={text => onChange('title', text)}
        />
        <TextInput
          style={styles.contentInpu}
          placeholder="제목을 내용을 입력하세요."
          placeholderTextColor={'#363636'}
          multiline
          onChangeText={text => onChange('content', text)}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  container: {
    flex: 1,
  },
  fullScreen: {
    flex: 1,
  },
  titleContainer: {
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  leftTitle: {
    alignSelf: 'flex-end',
  },
  universityLogo: {
    width: 36,
    height: 36,
  },
  ninckname: {
    color: '#262626',
    fontSize: 17,
    fontWeight: '500',
    lineHeight: 20,
  },
  createdAt: {
    color: '#909090',
    fontSize: 10,
    fontWeight: '500',
    lineHeight: 20,
  },
  inputContainer: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingVertical: 15,
    paddingHorizontal: 5,
    marginHorizontal: 15,
    borderRadius: 15,
  },
  titleInput: {
    color: '#262626',
    fontSize: 17,
    fontWeight: '700',
    lineHeight: 20,
  },
  contentInpu: {
    color: '#363636',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
  },
});
