import React, { useState } from 'react';
import { usePostFreePost } from '@/apis/post/usePostFreePost';
import { useAppSelector } from '@/hooks/redux';
import { MainStackScreenProps } from '@/screens/Stack/MainStack';
import { PostRequest } from '@/types/post';
import { useNavigation } from '@react-navigation/native';
import { FreePostWritePresenter } from './FreePostWritePresenter';

type Navigation = MainStackScreenProps<'FreePostWrite'>['navigation'];

const initialForm = {
  content: '',
  title: '',
};

export const FreePostWriteContainer = () => {
  const navigation = useNavigation<Navigation>();

  const { mutateAsync: savePost } = usePostFreePost();
  const { member } = useAppSelector(selector => selector.auth);

  const [form, setForm] = useState<PostRequest>(initialForm);

  const onChange = (key: keyof PostRequest, value: string) => {
    setForm({ ...form, [key]: value });
  };

  const onPressWrite = async () => {
    if (!form.title.trim() || !form.content.trim()) {
      return;
    }

    await savePost(form, {
      onSuccess: () => {
        navigation.goBack();
      },
    });
  };

  const props = {
    member,
    onChange,
    onPressWrite,
  };

  return <FreePostWritePresenter {...props} />;
};
