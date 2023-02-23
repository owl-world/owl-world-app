import React from 'react';
import { Dimensions, Image, SafeAreaView, StyleSheet } from 'react-native';
import { SubmitButton } from '@/components/Button';
import { SplitRow } from '@/components/SplitSpace';
import { Text } from '@/components/Text';

const { height } = Dimensions.get('screen');

type Props = {
  onPressSignIn: () => void;
};

export const SignUpSuccessPresenter = ({ onPressSignIn }: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <SplitRow height={height * 0.2} />

      <Image style={styles.logo} resizeMode="cover" source={require('@/assets/images/signup_success.png')} />

      <SplitRow height={70} />
      <Text style={styles.titleText}>회원가입이 완료되었습니다.</Text>
      <SplitRow height={30} />
      <Text style={styles.subTitleText}>로그인 후 올빼미광장을 즐겨보세요</Text>

      <SplitRow height={68} />

      <SubmitButton style={styles.button} onPress={onPressSignIn}>
        로그인
      </SubmitButton>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    alignSelf: 'center',
  },
  titleText: {
    color: '#3A3A3A',
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 18,
  },
  subTitleText: {
    color: '#A8A8A8',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 14,
  },
  button: {
    paddingHorizontal: 50,
  },
});
