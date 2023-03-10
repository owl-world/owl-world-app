import React from 'react';
import { useAppSelector } from '@/hooks/redux';
import { CompositeScreenProps } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeScreen } from '../Home';
import { PolicyScreen } from '../Policy';
import { FreePostScreen } from '../Post/FreePost';
import { FreePostDetailScreen } from '../Post/FreePost/FreePostDetail';
import { FreePostWriteScreen } from '../Post/FreePost/FreePostWrite';
import { ReviewScreen } from '../Review';
import { RootStackParamList, RootStackScreenProps } from './Stack';

export type MainStackParamList = {
  Review: undefined;
  Home: undefined;
  FreePost: undefined;
  FreePostDetail: {
    postId: number;
  };
  FreePostWrite: undefined;
  Policy: undefined;
};

export type MainStackScreenProps<T extends keyof MainStackParamList> = CompositeScreenProps<
  NativeStackScreenProps<MainStackParamList, T>,
  RootStackScreenProps<keyof RootStackParamList>
>;

const Stack = createNativeStackNavigator<MainStackParamList>();

export const MainStack = () => {
  const { isStandingWater } = useAppSelector(selector => selector.auth);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!isStandingWater && <Stack.Screen name="Review" component={ReviewScreen} />}
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="FreePost" component={FreePostScreen} />
      <Stack.Screen name="FreePostDetail" component={FreePostDetailScreen} />
      <Stack.Screen name="FreePostWrite" component={FreePostWriteScreen} />
      <Stack.Screen name="Policy" component={PolicyScreen} />
    </Stack.Navigator>
  );
};
