import React from 'react';
import { useGetPopularPosts } from '@/apis/post';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { onLogout } from '@/slices/auth';
import { CompositeScreenProps, useNavigation } from '@react-navigation/native';
import { MainStackScreenProps } from '../Stack/MainStack';
import { RootStackParamList, RootStackScreenProps } from '../Stack/Stack';
import { HomePresenter } from './HomePresenter';

type Navigation = CompositeScreenProps<
  MainStackScreenProps<'Home'>,
  RootStackScreenProps<keyof RootStackParamList>
>['navigation'];

export const HomeContainer = () => {
  const dispatch = useAppDispatch();
  const naviation = useNavigation<Navigation>();

  const { member } = useAppSelector(selector => selector.auth);
  const { posts } = useGetPopularPosts();

  const menus = [
    {
      title: '질문답변',
      source: require('@/assets/images/qna.png'),
      onPress: () => onPressQna(),
    },
    {
      title: '제도지원',
      source: require('@/assets/images/policy.png'),
      onPress: () => onPressPolicy(),
    },
    {
      title: '자유게시판',
      source: require('@/assets/images/free-post.png'),
      onPress: () => onPressFreePost(),
    },
  ];

  const onPressPost = (postId: number) => {
    naviation.navigate('FreePostDetail', {
      postId,
    });
  };

  const onPressQna = () => {
    if (!member) {
      return;
    }

    naviation.navigate('QnA', {
      universityId: member.universityId,
      universityName: member.universityName,
    });
  };

  const onPressPolicy = () => {
    naviation.navigate('Policy');
  };

  const onPressFreePost = () => {
    naviation.navigate('FreePost');
  };

  const onPressSignOut = () => {
    dispatch(onLogout());
  };

  const props = {
    member,
    posts,
    menus,
    onPressPost,
    onPressSignOut,
  };

  return <HomePresenter {...props} />;
};
