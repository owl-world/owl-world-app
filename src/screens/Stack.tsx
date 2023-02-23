import React from 'react';
import { View } from 'react-native';
import { useAuth } from '@/hooks/useAuth';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { SignInScreen } from './SignIn';

export type RootStackParamList = {
  SignIn: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, T>;

const Stack = createNativeStackNavigator<RootStackParamList>();

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
        {isLoggedIn ? <View /> : <Stack.Screen name="SignIn" component={SignInScreen} />}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
