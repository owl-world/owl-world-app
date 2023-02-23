import React, { useCallback, useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { SignInRequest } from '@/types/auth';
import { useNavigation } from '@react-navigation/native';
import { RootStackScreenProps } from '../Stack';
import { SignInPresenter } from './SignInPresenter';

type Navigation = RootStackScreenProps<'SignIn'>['navigation'];

const initialForm = {
  email: '',
  password: '',
};

export const SignInContainer = () => {
  const navigation = useNavigation<Navigation>();

  const { signIn } = useAuth();

  const [form, setForm] = useState<SignInRequest>(initialForm);

  const onChange = useCallback(
    (key: string, value: string) => {
      setForm({ ...form, [key]: value });
    },
    [form]
  );

  const onPressSignIn = async () => {
    // TO-DO validation();
    if (!!form.email.trim() && !!form.password.trim()) {
      signIn(form);
    }
  };

  const onPressSignUp = () => {
    navigation.navigate('SignUp');
  };

  const onPressNonMemberSignIn = () => {
    navigation.navigate('Main');
  };

  const props = {
    onChange,
    onPressSignIn,
    onPressSignUp,
    onPressNonMemberSignIn,
  };

  return <SignInPresenter {...props} />;
};
