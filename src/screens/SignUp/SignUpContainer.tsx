import React, { useCallback, useState } from 'react';
import EncryptedStorage from 'react-native-encrypted-storage';
import { useSignUp } from '@/apis/member';
import { useGetUniversities, useGetUniversity } from '@/apis/university';
import { SignUpEntity } from '@/types/member';
import { useNavigation } from '@react-navigation/native';
import { RootStackScreenProps } from '../Stack/Stack';
import { SignUpPresenter } from './SignUpPresenter';

type Navigation = RootStackScreenProps<'SignUp'>['navigation'];

const initialForm = {
  email: '',
  password: '',
  university: null,
  majorId: null,
  nickname: '',
};

export const SignUpContainer = () => {
  const navigation = useNavigation<Navigation>();
  const { mutateAsync: signUp } = useSignUp();

  const [form, setForm] = useState<SignUpEntity>(initialForm);

  const { universities = [] } = useGetUniversities();
  const { universityMajor = [] } = useGetUniversity(form.university);

  const onChange = useCallback(
    (key: keyof SignUpEntity, value: string) => {
      setForm({ ...form, [key]: value });
    },
    [form]
  );

  // const fetchMajor = (code: string) => {};

  const onPressSignUp = async () => {
    if (validate()) {
      signUp(form, {
        onSuccess: goNavSignUpSuccess,
      });
    }
  };

  const validate = () => {
    let isValid = true;

    // 회원가입 폼이 비어있는 경우를 체크한다.
    for (let [, value] of Object.entries(form)) {
      if (!value) {
        isValid = false;
      }
    }

    return isValid;
  };

  const goNavSignUpSuccess = () => {
    navigation.navigate('SignUpSuccess');
  };

  const onPressSignIn = () => {
    navigation.goBack();
  };

  const onPressNonMemberSignIn = async () => {
    const bookmarks = JSON.parse((await EncryptedStorage.getItem('bookMark')) || '[]');

    if (bookmarks.length > 0) {
      navigation.navigate('Home');
    } else {
      navigation.navigate('BookMark');
    }
  };

  const props = {
    universities,
    universityMajor,
    onChange,
    onPressSignUp,
    onPressSignIn,
    onPressNonMemberSignIn,
  };

  return <SignUpPresenter {...props} />;
};
