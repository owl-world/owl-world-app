import React, { useState } from 'react';
import { Keyboard } from 'react-native';
import { usePostComment } from '@/apis/comment';
import { usePostLike, usePostUnLike } from '@/apis/like';
import { useGetFreePost } from '@/apis/post';
import { MainStackScreenProps } from '@/screens/Stack/MainStack';
import { useRoute } from '@react-navigation/native';
import { FreePostDetailPresenter } from './FreePostDetailPresenter';

type Route = MainStackScreenProps<'FreePostDetail'>['route'];

export const FreePostDetailContainer = () => {
  const route = useRoute<Route>();

  const { postId } = route.params;
  const { post, refetch: refetchPost } = useGetFreePost(postId);

  const { mutateAsync: like, isLoading: isPostLikeLoading } = usePostLike();
  const { mutateAsync: unLike, isLoading: isUnLikeLoading } = usePostUnLike();
  const { mutateAsync: postComment } = usePostComment(postId);

  const [comment, setComment] = useState('');

  const onPressLike = async (liked: boolean) => {
    if (!post || isPostLikeLoading || isUnLikeLoading) {
      return;
    }

    const targetId = post.id;
    const type = 'post';

    if (liked) {
      await unLike({ targetId, type });
    } else {
      await like({ targetId, type });
    }

    refetchPost();
  };

  const onChange = (value: string) => {
    setComment(value);
  };

  const onPressEnter = async () => {
    if (!comment.trim()) {
      return;
    }

    await postComment(
      { postId, comment },
      {
        onSuccess: () => {
          setComment('');
          Keyboard.dismiss();
        },
      }
    );
  };

  if (!post) {
    return null;
  }

  const props = {
    post,
    comment,
    onPressLike,
    onChange,
    onPressEnter,
  };

  return <FreePostDetailPresenter {...props} />;
};
