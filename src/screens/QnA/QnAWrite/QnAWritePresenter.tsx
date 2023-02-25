import { format } from 'date-fns';
import React from 'react';
import { Image, SafeAreaView, StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { SvgCssUri } from 'react-native-svg';
import { WriteButton } from '@/components/Button';
import { Header } from '@/components/Header';
import { SplitColumn, SplitRow } from '@/components/SplitSpace';
import { Text } from '@/components/Text';
import { nonMemberNickname } from '@/screens/BookMark/BookMarkPresenter';
import { TokenBody } from '@/types/auth';
import { PostRequest } from '@/types/post';

type Props = {
  universityName: string;
  member?: TokenBody;
  onChange: (key: keyof PostRequest, value: string) => void;
  onPressWrite: () => void;
};

export const QnAWritePresenter = ({ universityName, member, onChange, onPressWrite }: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="질문답변 게시판" subTitle={universityName} />

      <SplitRow height={30} />

      <View style={[styles.titleContainer, styles.row]}>
        <View style={[styles.row, styles.leftTitle]}>
          {member ? (
            <SvgCssUri style={styles.universityLogo} uri={member.universityLogo} />
          ) : (
            <Image
              style={styles.universityLogo}
              resizeMode="cover"
              source={require('@/assets/images/signup_icon.png')}
            />
          )}
          <SplitColumn width={5} />
          <View>
            <Text style={styles.ninckname}>{member ? member.nickname : nonMemberNickname}</Text>
            <Text style={styles.createdAt}>{format(new Date(), 'MM/dd hh:mm')}</Text>
          </View>
        </View>
        <WriteButton onPress={onPressWrite} />
      </View>

      <SplitRow height={15} />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.contentInpu}
          placeholder="내용을 입력하세요."
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
    paddingHorizontal: 10,
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
