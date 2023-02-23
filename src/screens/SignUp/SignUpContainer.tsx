import React, { useCallback, useState } from 'react';
import { useSignUp } from '@/apis/member';
import { SignUpEntity } from '@/types/member';
import { useNavigation } from '@react-navigation/native';
import { RootStackScreenProps } from '../Stack';
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

  const onChange = useCallback(
    (key: string, value: string) => {
      setForm({ ...form, [key]: value });
    },
    [form]
  );

  const onPressSignUp = () => {
    if (validate()) {
      signUp(form);
    }
  };

  const validate = () => {
    let isValid = true;

    for (let [, value] of Object.entries(form)) {
      if (!value) {
        isValid = false;
      }
    }

    return isValid;
  };

  const onPressNonMemberSignIn = () => {
    navigation.navigate('Main');
  };

  const props = {
    onChange,
    onPressSignUp,
    onPressNonMemberSignIn,
  };

  return <SignUpPresenter {...props} />;
};
