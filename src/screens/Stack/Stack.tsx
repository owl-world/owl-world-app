import React from 'react';
import { useAuth } from '@/hooks/useAuth';
import { DefaultTheme, NavigationContainer, NavigatorScreenParams } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { BookMarkScreen } from '../BookMark';
import { NonMemberHomeScreen } from '../Home/NonMemberHome';
import { PolicyDetailScreen } from '../Policy/PolicyDetail';
import { QnAScreen } from '../QnA';
import { QnADetailScreen } from '../QnA/QnADetail';
import { QnAWriteScreen } from '../QnA/QnAWrite';
import { SearchScreen } from '../Search';
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
    avg: number;
  };
  QnA: {
    universityId: number;
    universityName: string;
  };
  QnADetail: {
    questionId: number;
    universityName: string;
  };
  QnAWrite: {
    universityId: number;
    universityName: string;
  };
  Search: {
    searchValue: string;
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
          <Stack.Group>
            <Stack.Screen name="MainStack" component={MainStack} />
          </Stack.Group>
        ) : (
          <Stack.Group>
            <Stack.Screen name="SignIn" component={SignInScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            <Stack.Screen name="SignUpSuccess" component={SignUpSuccessScreen} />
          </Stack.Group>
        )}

        <Stack.Group>
          <Stack.Screen name="BookMark" component={BookMarkScreen} />
          <Stack.Screen name="Home" component={NonMemberHomeScreen} />
          <Stack.Screen name="PolicyDetail" component={PolicyDetailScreen} />
          <Stack.Screen name="QnA" component={QnAScreen} />
          <Stack.Screen name="QnADetail" component={QnADetailScreen} />
          <Stack.Screen name="QnAWrite" component={QnAWriteScreen} />
          <Stack.Screen name="Search" component={SearchScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
