import React from 'react';
import { useAuth } from '@/hooks/useAuth';
import { DefaultTheme, NavigationContainer, NavigatorScreenParams } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { BookMarkScreen } from '../BookMark';
import { NonMemberHomeScreen } from '../Home/NonMemberHome';
import { PolicyDetailScreen } from '../Policy/PolicyDetail';
import { SignInScreen } from '../SignIn';
import { SignUpScreen } from '../SignUp';
import { SignUpSuccessScreen } from '../SignUp/SignUpSuccess';
import { MainStack, MainStackParamList } from './MainStack';

export type RootStackParamList = {
  MainStack: NavigatorScreenParams<MainStackParamList>;
  SignIn: undefined;
  SignUp: undefined;
  SignUpSuccess: undefined;
  BookMark: undefined;
  Home: undefined;
  PolicyDetail: {
    universityId: number;
    code: string;
  };
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
        {isLoggedIn ? (
          <Stack.Screen name="MainStack" component={MainStack} />
        ) : (
          <Stack.Group>
            <Stack.Screen name="SignIn" component={SignInScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            <Stack.Screen name="SignUpSuccess" component={SignUpSuccessScreen} />
            <Stack.Screen name="BookMark" component={BookMarkScreen} />
            <Stack.Screen name="Home" component={NonMemberHomeScreen} />
            <Stack.Screen name="PolicyDetail" component={PolicyDetailScreen} />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
