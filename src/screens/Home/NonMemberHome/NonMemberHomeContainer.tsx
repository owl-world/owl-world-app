import React, { useEffect, useState } from 'react';
import EncryptedStorage from 'react-native-encrypted-storage/';
import { useGetBookMark } from '@/apis/review';
import { RootStackScreenProps } from '@/screens/Stack/Stack';
import { useNavigation } from '@react-navigation/native';
import { NonMemberHomePresenter } from './NonMemberHomePresenter';

type Navigation = RootStackScreenProps<'Home'>['navigation'];

export const NonMemberHomeContainer = () => {
  const naviation = useNavigation<Navigation>();

  const [universityIds, setUniversityIds] = useState<number[]>([]);
  const [searchValue, setSearchValue] = useState('');

  const { bookmarks = [] } = useGetBookMark(universityIds);

  useEffect(() => {
    getUniversityIds();
  }, []);

  const getUniversityIds = async () => {
    const ids = (await EncryptedStorage.getItem('bookMark')) || '[]';
    setUniversityIds(JSON.parse(ids));
  };

  const onChnage = (value: string) => {
    setSearchValue(value);
  };

  const onPressUniversity = (universityId: number, code: string) => {
    naviation.navigate('PolicyDetail', {
      universityId,
      code,
    });
  };

  const props = {
    bookmarks,
    onChnage,
    onPressUniversity,
  };

  return <NonMemberHomePresenter {...props} />;
};
