import React, { useState } from 'react';
import { useGetUniversities } from '@/apis/university';
import { useNavigation } from '@react-navigation/native';
import { MainStackScreenProps } from '../Stack/MainStack';
import { PolicyPresenter } from './PolicyPresenter';

type Navigation = MainStackScreenProps<'Policy'>['navigation'];

export const PolicyContainer = () => {
  const navigation = useNavigation<Navigation>();
  const { universities } = useGetUniversities();

  const [searchValue, setSearchValue] = useState('');

  const filteredUniversities = universities
    ? universities.filter(university => university.name.includes(searchValue))
    : [];

  const onChange = (value: string) => {
    setSearchValue(value);
  };

  const onPressUniversity = (universityId: number) => {
    navigation.navigate('PolicyDetail', {
      universityId,
    });
  };

  const props = {
    universities: filteredUniversities,
    onChange,
    onPressUniversity,
  };

  return <PolicyPresenter {...props} />;
};
