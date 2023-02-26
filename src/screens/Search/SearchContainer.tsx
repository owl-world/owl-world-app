import React from 'react';
import { useGetSearch } from '@/apis/search';
import { useNavigation, useRoute } from '@react-navigation/native';
import { RootStackScreenProps } from '../Stack/Stack';
import { SearchPresenter } from './SearchPresenter';

type Navigation = RootStackScreenProps<'Search'>['navigation'];
type Route = RootStackScreenProps<'Search'>['route'];

export const SearchContainer = () => {
  const navigation = useNavigation<Navigation>();
  const route = useRoute<Route>();

  const { searchValue } = route.params;

  const { search } = useGetSearch(searchValue);

  const onPressPost = (type: 'post' | 'question', universityId: number, universityName: string) => {
    if (type === 'post') {
      navigation.navigate('FreePost');
    } else if (type === 'question') {
      navigation.navigate('QnA', {
        universityId,
        universityName,
      });
    }
  };

  if (!search) {
    return null;
  }

  const props = {
    search,
    searchValue,
    onPressPost,
  };

  return <SearchPresenter {...props} />;
};
