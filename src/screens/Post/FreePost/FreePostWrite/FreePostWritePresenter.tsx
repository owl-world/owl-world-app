import { format } from 'date-fns';
import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SvgCssUri } from 'react-native-svg';
import { WriteButton } from '@/components/Button';
import { Header } from '@/components/Header';
import { SplitColumn, SplitRow } from '@/components/SplitSpace';
import { Text } from '@/components/Text';
import { TokenBody } from '@/types/auth';
import { PostRequest } from '@/types/post';

type Props = {
  member?: TokenBody;
  onChange: (key: keyof PostRequest, value: string) => void;
  onPressWrite: () => void;
};

export const FreePostWritePresenter = ({ member, onChange, onPressWrite }: Props) => {
  const { bottom } = useSafeAreaInsets();

  return (
    <SafeAreaView style={styles.container}>
      <Header title="자유게시판" subTitle="올빼미광장" />

      <View style={[styles.titleContainer, styles.row]}>
        <View style={[styles.row, styles.leftTitle]}>
          <SvgCssUri style={styles.universityLogo} uri={member?.universityLogo || null} />
          <SplitColumn width={5} />
          <View>
            <Text style={styles.ninckname}>{member?.nickname}</Text>
            <Text style={styles.createdAt}>{format(new Date(), 'MM/dd hh:mm')}</Text>
          </View>
        </View>
        <WriteButton onPress={onPressWrite} />
      </View>

      <SplitRow height={15} />

      <View style={styles.inputContainer}>
        <SplitRow height={15} />
        <TextInput
          style={styles.titleInput}
          placeholder="제목을 입력하세요."
          placeholderTextColor={'#262626'}
          onChangeText={text => onChange('title', text)}
        />
        <SplitRow height={15} />
        <TextInput
          style={styles.contentInput}
          placeholder="내용을 입력하세요."
          placeholderTextColor={'#363636'}
          multiline
          onChangeText={text => onChange('content', text)}
        />
      </View>

      {!bottom && <SplitRow height={18} />}
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
    // paddingVertical: height * 15,
    paddingHorizontal: 10,
    marginHorizontal: 15,
    borderRadius: 15,
    elevation: 1,
  },
  titleInput: {
    color: '#262626',
    fontSize: 17,
    fontWeight: '700',
    // lineHeight: 20,
    paddingHorizontal: 5,
    paddingVertical: 0,
    height: 20,
  },
  contentInput: {
    color: '#363636',
    fontSize: 14,
    fontWeight: '500',
    paddingHorizontal: 5,
    // paddingVertical: 0,
    lineHeight: 20,
    paddingTop: 0,
  },
});
