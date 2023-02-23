import React from 'react';
import { useAuth } from '@/hooks/useAuth';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';
import { SignInScreen } from './SignIn';
import { SignUpScreen } from './SignUp';
import { SignUpSuccessScreen } from './SignUp/SignUpSuccess';

export type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  SignUpSuccess: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> = StackScreenProps<RootStackParamList, T>;

const Stack = createStackNavigator<RootStackParamList>();

const navigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

export const RootNavigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavigationContainer theme={navigationTheme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="SignUpSuccess" component={SignUpSuccessScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
