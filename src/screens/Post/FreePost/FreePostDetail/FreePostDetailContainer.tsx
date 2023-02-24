import React, { useState } from 'react';
import { usePostComment } from '@/apis/comment';
import { useGetFreePost } from '@/apis/post';
import { MainStackScreenProps } from '@/screens/Stack/MainStack';
import { useRoute } from '@react-navigation/native';
import { FreePostDetailPresenter } from './FreePostDetailPresenter';

type Route = MainStackScreenProps<'FreePostDetail'>['route'];

export const FreePostDetailContainer = () => {
  const route = useRoute<Route>();

  const { postId } = route.params;
  const { post } = useGetFreePost(postId);
  const { mutateAsync: postComment } = usePostComment(postId);

  const [comment, setComment] = useState('');

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
    onChange,
    onPressEnter,
  };

  return <FreePostDetailPresenter {...props} />;
};
