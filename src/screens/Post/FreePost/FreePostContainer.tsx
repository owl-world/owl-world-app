import React from 'react';
import { useGetPosts } from '@/apis/post/useGetPosts';
import { MainStackScreenProps } from '@/screens/Stack/MainStack';
import { useNavigation } from '@react-navigation/native';
import { FreePostPresenter } from './FreePostPresenter';

type Navigation = MainStackScreenProps<'FreePost'>['navigation'];

export const FreePostContainer = () => {
  const navigation = useNavigation<Navigation>();
  const { posts } = useGetPosts();

  const onPressPost = (postId: number) => {
    navigation.navigate('FreePostDetail', {
      postId,
    });
  };

  const onPressWrite = () => {
    navigation.navigate('FreePostWrite');
  };

  const props = {
    posts,
    onPressPost,
    onPressWrite,
  };

  return <FreePostPresenter {...props} />;
};
