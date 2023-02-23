import React from 'react';
import { Dimensions, Image, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { SubmitButton } from '@/components/Button';
import { SplitRow } from '@/components/SplitSpace';
import { Text } from '@/components/Text';

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
        <TextInput
          style={styles.input}
          placeholder="학교 이메일"
          placeholderTextColor={'#7D7D7D'}
          onChangeText={text => onChange('email', text)}
        />
        <SplitRow height={20} />
        <TextInput
          style={styles.input}
          placeholder="비밀번호"
          placeholderTextColor={'#7D7D7D'}
          secureTextEntry={true}
          onChangeText={text => onChange('password', text)}
        />

        <SplitRow height={30} />

        <SubmitButton onPress={onPressSignIn}>로그인</SubmitButton>
      </View>

      <SplitRow height={30} />

      <TouchableOpacity style={styles.additionalButton} onPress={onPressSignUp}>
        <Text style={styles.additionalButtonText}>학교인증 회원가입</Text>
      </TouchableOpacity>

      <SplitRow height={11} />

      <TouchableOpacity style={styles.additionalButton} onPress={onPressNonMemberSignIn}>
        <Text style={styles.additionalButtonText}>비회원 로그인</Text>
      </TouchableOpacity>
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
