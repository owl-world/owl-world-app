import React from 'react';
import { RootStackScreenProps } from '@/screens/Stack';
import { useNavigation } from '@react-navigation/native';
import { SignUpSuccessPresenter } from './SignUpSuccessPresenter';

type Navigation = RootStackScreenProps<'SignUpSuccess'>['navigation'];

export const SignUpSuccessContainer = () => {
  const navigation = useNavigation<Navigation>();

  const onPressSignIn = () => {
    navigation.navigate('SignIn');
  };

  const props = {
    onPressSignIn,
  };

  return <SignUpSuccessPresenter {...props} />;
};
