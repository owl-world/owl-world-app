import React from 'react';
import { Dimensions, Image, SafeAreaView, StyleSheet, View } from 'react-native';
import { LabelButton, SubmitButton } from '@/components/Button';
import { SignInput } from '@/components/Input';
import { SplitRow } from '@/components/SplitSpace';

const { height } = Dimensions.get('screen');

type Props = {
  onChange: (key: string, value: string) => void;
  onPressSignIn: () => void;
  onPressSignUp: () => void;
  onPressNonMemberSignIn: () => void;
};

export const SignInPresenter = ({ onChange, onPressSignIn, onPressSignUp, onPressNonMemberSignIn }: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <SplitRow height={height * 0.2} />

      <Image style={styles.logo} resizeMode="cover" source={require('@/assets/images/logo.png')} />

      <SplitRow height={height * 0.04} />

      <View style={styles.formContainer}>
        <SignInput placeholder="학교 이메일" onChangeText={text => onChange('email', text)} />
        <SplitRow height={20} />
        <SignInput placeholder="비밀번호" secureTextEntry={true} onChangeText={text => onChange('password', text)} />

        <SplitRow height={30} />

        <SubmitButton onPress={onPressSignIn}>로그인</SubmitButton>
      </View>

      <SplitRow height={30} />

      <LabelButton onPress={onPressSignUp}>학교인증 회원가입</LabelButton>
      <SplitRow height={11} />
      <LabelButton onPress={onPressNonMemberSignIn}>비회원 로그인</LabelButton>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    alignSelf: 'center',
  },
  formContainer: {
    paddingHorizontal: 30,
  },
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
  },
});
