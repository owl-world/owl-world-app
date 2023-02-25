import React, { useCallback, useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { SignInEntity } from '@/types/auth';
import { useNavigation } from '@react-navigation/native';
import { RootStackScreenProps } from '../Stack/Stack';
import { SignInPresenter } from './SignInPresenter';

type Navigation = RootStackScreenProps<'SignIn'>['navigation'];

const initialForm = {
  email: 'youngseo@google.com',
  password: '1234',
};

export const SignInContainer = () => {
  const navigation = useNavigation<Navigation>();

  const { signIn } = useAuth();

  const [form, setForm] = useState<SignInEntity>(initialForm);

  const onChange = useCallback(
    (key: keyof SignInEntity, value: string) => {
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
    navigation.navigate('BookMark');
  };

  const props = {
    onChange,
    onPressSignIn,
    onPressSignUp,
    onPressNonMemberSignIn,
  };

  return <SignInPresenter {...props} />;
};
