import React, { useState } from 'react';
import { usePostQuestion } from '@/apis/question';
import { useAppSelector } from '@/hooks/redux';
import { RootStackScreenProps } from '@/screens/Stack/Stack';
import { useNavigation, useRoute } from '@react-navigation/native';
import { QnAWritePresenter } from './QnAWritePresenter';

type Navigation = RootStackScreenProps<'QnAWrite'>['navigation'];
type Route = RootStackScreenProps<'QnAWrite'>['route'];

export const QnAWriteContainer = () => {
  const navigation = useNavigation<Navigation>();
  const route = useRoute<Route>();

  const { universityId, universityName } = route.params;
  const { mutateAsync: postQuestion } = usePostQuestion();
  const { member } = useAppSelector(selector => selector.auth);

  const [content, setContent] = useState('');

  const onChange = (value: string) => {
    setContent(value);
  };

  const onPressWrite = async () => {
    if (!content.trim()) {
      return;
    }

    await postQuestion(
      { universityId, content },
      {
        onSuccess: () => {
          navigation.goBack();
        },
      }
    );
  };

  const props = {
    universityName,
    member,
    onChange,
    onPressWrite,
  };

  return <QnAWritePresenter {...props} />;
};
