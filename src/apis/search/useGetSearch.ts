import { useQuery } from 'react-query';
import { Search } from '@/types/search';
import { fetcher } from '../fetcher';

type GetSearchResponse = {
  data: Search;
};

const getSearch = async (keyword: string) => {
  const res = await fetcher.get<GetSearchResponse>('/search', {
    params: {
      keyword,
    },
  });

  return res.data.data;
};

export const useGetSearch = (keyword: string) => {
  const { data, isLoading, isError, refetch } = useQuery(['useGetSearch'], () => getSearch(keyword));

  return {
    search: data,
    loading: isLoading,
    error: isError,
    refetch,
  };
};
