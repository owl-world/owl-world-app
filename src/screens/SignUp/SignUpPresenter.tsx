import React from 'react';
import { Dimensions, Image, SafeAreaView, StyleSheet, View } from 'react-native';
import { LabelButton, SubmitButton } from '@/components/Button';
import { SignInput } from '@/components/Input';
import { SplitRow } from '@/components/SplitSpace';

const { height } = Dimensions.get('screen');

type Props = {
  onChange: (key: string, value: string) => void;
  onPressSignUp: () => void;
  onPressNonMemberSignIn: () => void;
};

const forms = [
  { key: 'email', placeholder: '학교 이메일' },
  { key: 'password', placeholder: '비밀번호' },
  { key: 'university', placeholder: '학교' },
  { key: 'majorId', placeholder: '학과' },
  { key: 'nickname', placeholder: '닉네임' },
];

export const SignUpPresenter = ({ onChange, onPressSignUp, onPressNonMemberSignIn }: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <SplitRow height={height * 0.1} />

      <Image style={styles.logo} resizeMode="cover" source={require('@/assets/images/signup_icon.png')} />

      <SplitRow height={30} />

      <View style={styles.formContainer}>
        {forms.map(form => {
          return (
            <React.Fragment key={form.key}>
              <SignInput
                style={styles.input}
                placeholder={form.placeholder}
                secureTextEntry={form.key === 'password'}
                onChangeText={text => onChange(form.key, text)}
              />
              <SplitRow height={15} />
            </React.Fragment>
          );
        })}

        <SplitRow height={15} />
        <SubmitButton onPress={onPressSignUp}>회원가입</SubmitButton>
      </View>

      <SplitRow height={33} />

      <LabelButton color="#808080" onPress={onPressNonMemberSignIn}>
        비회원 로그인
      </LabelButton>
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
    paddingHorizontal: 42,
  },
  input: {
    paddingVertical: 20,
  },
  additionalButton: {
    alignItems: 'center',
  },
  additionalButtonText: {
    color: '#454545',
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 15,
  },
});
