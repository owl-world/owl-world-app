import React, { useState } from 'react';
import EncryptedStorage from 'react-native-encrypted-storage';
import { useGetUniversities } from '@/apis/university';
import { useNavigation } from '@react-navigation/native';
import { RootStackScreenProps } from '../Stack/Stack';
import { BookMarkPresenter } from './BookMarkPresenter';

type Navigation = RootStackScreenProps<'BookMark'>['navigation'];

export const BookMarkContainer = () => {
  const navigation = useNavigation<Navigation>();

  const { universities } = useGetUniversities();

  const [likes, setLikes] = useState<number[]>([]);

  const onPressLike = (universityId: number) => {
    setLikes(prev => {
      const newLikes = [...prev];

      if (prev.includes(universityId)) {
        return newLikes.filter(newLike => newLike !== universityId);
      } else {
        newLikes.push(universityId);
        return newLikes;
      }
    });
  };

  const onPressConfirm = async () => {
    if (likes.length) {
      await EncryptedStorage.setItem('bookMark', JSON.stringify(likes));
    }

    goNavHome();
  };

  const goNavHome = () => {
    navigation.navigate('Home');
  };

  if (!universities) {
    return null;
  }

  const props = {
    universities,
    likes,
    onPressLike,
    onPressConfirm,
  };

  return <BookMarkPresenter {...props} />;
};
