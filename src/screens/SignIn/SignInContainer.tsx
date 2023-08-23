import React, { useCallback, useState } from 'react';
import EncryptedStorage from 'react-native-encrypted-storage';
import { useAuth } from '@/hooks/useAuth';
import { SignInEntity } from '@/types/auth';
import { useNavigation } from '@react-navigation/native';
import { RootStackScreenProps } from '../Stack/Stack';
import { SignInPresenter } from './SignInPresenter';

type Navigation = RootStackScreenProps<'SignIn'>['navigation'];

const initialForm = {
  email: '',
  password: '',
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
    if (!!form.email.trim() && !!form.password.trim()) {
      signIn(form);
    }
  };

  const onPressSignUp = () => {
    navigation.navigate('SignUp');
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
    form,
    onChange,
    onPressSignIn,
    onPressSignUp,
    onPressNonMemberSignIn,
  };

  return <SignInPresenter {...props} />;
};
