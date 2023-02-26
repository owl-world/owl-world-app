import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { LabelButton, SubmitButton } from '@/components/Button';
import { Container } from '@/components/Grid';
import { SafreAreaFlexView } from '@/components/Grid/SafreAreaFlexView';
import { SignInput } from '@/components/Input';
import { SplitRow } from '@/components/SplitSpace';
import { SignInEntity } from '@/types/auth';

type Props = {
  form: any;
  onChange: (key: keyof SignInEntity, value: string) => void;
  onPressSignIn: () => void;
  onPressSignUp: () => void;
  onPressNonMemberSignIn: () => void;
};

export const SignInPresenter = ({ form, onChange, onPressSignIn, onPressSignUp, onPressNonMemberSignIn }: Props) => (
  <SafreAreaFlexView style={styles.container}>
    <Image style={styles.logo} resizeMode="cover" source={require('@/assets/images/logo.png')} />

    <SplitRow height={30} />

    <Container paddingHorizontal={30}>
      <SignInput placeholder="학교 이메일" onChangeText={text => onChange('email', text)} value={form.email} />
      <SplitRow height={20} />
      <SignInput
        placeholder="비밀번호"
        secureTextEntry={true}
        onChangeText={text => onChange('password', text)}
        value={form.password}
      />

      <SplitRow height={30} />

      <SubmitButton onPress={onPressSignIn}>로그인</SubmitButton>
    </Container>

    <SplitRow height={30} />

    <LabelButton onPress={onPressSignUp}>학교인증 회원가입</LabelButton>
    <SplitRow height={10} />
    <LabelButton onPress={onPressNonMemberSignIn}>비회원 로그인</LabelButton>
  </SafreAreaFlexView>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  logo: {
    alignSelf: 'center',
  },
});
