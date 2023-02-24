import React from 'react';
import { CompositeScreenProps } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeScreen } from '../Home';
import { FreePostScreen } from '../Post/FreePost';
import { FreePostDetailScreen } from '../Post/FreePost/FreePostDetail';
import { ReviewScreen } from '../Review';
import { RootStackParamList, RootStackScreenProps } from './Stack';

export type MainStackParamList = {
  Review: undefined;
  Home: undefined;
  FreePost: undefined;
  FreePostDetail: {
    postId: number;
  };
};

export type MainStackScreenProps<T extends keyof MainStackParamList> = CompositeScreenProps<
  NativeStackScreenProps<MainStackParamList, T>,
  RootStackScreenProps<keyof RootStackParamList>
>;

const Stack = createNativeStackNavigator<MainStackParamList>();

export const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Review" component={ReviewScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="FreePost" component={FreePostScreen} />
      <Stack.Screen name="FreePostDetail" component={FreePostDetailScreen} />
    </Stack.Navigator>
  );
};
