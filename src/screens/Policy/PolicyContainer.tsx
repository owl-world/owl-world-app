import React, { useState } from 'react';
import { useGetBookMarks } from '@/apis/review';
import { useNavigation } from '@react-navigation/native';
import { MainStackScreenProps } from '../Stack/MainStack';
import { PolicyPresenter } from './PolicyPresenter';

type Navigation = MainStackScreenProps<'Policy'>['navigation'];

export const PolicyContainer = () => {
  const navigation = useNavigation<Navigation>();
  const { universities } = useGetBookMarks();

  const [searchValue, setSearchValue] = useState('');

  const filteredUniversities = universities
    ? universities.filter(university => university.universityDto.name.includes(searchValue))
    : [];

  const onChange = (value: string) => {
    setSearchValue(value);
  };

  const onPressUniversity = (universityId: number, code: string, avg: number) => {
    navigation.navigate('PolicyDetail', {
      universityId,
      code,
      avg,
    });
  };

  const props = {
    universities: filteredUniversities,
    onChange,
    onPressUniversity,
  };

  return <PolicyPresenter {...props} />;
};
