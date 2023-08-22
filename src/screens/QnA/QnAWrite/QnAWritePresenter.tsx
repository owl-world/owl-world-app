import { format } from 'date-fns';
import React from 'react';
import { Image, SafeAreaView, StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SvgCssUri } from 'react-native-svg';
import { WriteButton } from '@/components/Button';
import { Row } from '@/components/Grid';
import { Header } from '@/components/Header';
import { SplitColumn, SplitRow } from '@/components/SplitSpace';
import { Text } from '@/components/Text';
import { nonMemberNickname } from '@/screens/BookMark/BookMarkPresenter';
import { TokenBody } from '@/types/auth';

type Props = {
  universityName: string;
  member?: TokenBody;
  onChange: (value: string) => void;
  onPressWrite: () => void;
};

export const QnAWritePresenter = ({ universityName, member, onChange, onPressWrite }: Props) => {
  const { bottom } = useSafeAreaInsets();

  return (
    <SafeAreaView style={styles.container}>
      <Header title="질문답변 게시판" subTitle={universityName} />

      <Row style={styles.titleContainer}>
        <Row style={styles.leftTitle}>
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
        </Row>
        <WriteButton onPress={onPressWrite} />
      </Row>

      <SplitRow height={15} />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.contentInput}
          placeholder="내용을 입력하세요."
          placeholderTextColor={'#363636'}
          multiline
          onChangeText={text => onChange(text)}
        />
      </View>

      {!bottom && <SplitRow height={18} />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
    elevation: 1,
  },
  titleInput: {
    color: '#262626',
    fontSize: 17,
    fontWeight: '700',
    lineHeight: 20,
  },
  contentInput: {
    color: '#363636',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
  },
});
