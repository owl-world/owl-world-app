import React, { useEffect } from 'react';
import { useGetFreePosts } from '@/apis/post/useGetFreePosts';
import { MainStackScreenProps } from '@/screens/Stack/MainStack';
import { useNavigation } from '@react-navigation/native';
import { FreePostPresenter } from './FreePostPresenter';

type Navigation = MainStackScreenProps<'FreePost'>['navigation'];

export const FreePostContainer = () => {
  const navigation = useNavigation<Navigation>();
  const { posts, refetch } = useGetFreePosts();

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

  useEffect(() => {
    navigation.addListener('focus', () => {
      refetch();
    });
  }, [navigation, refetch]);

  return <FreePostPresenter {...props} />;
};
