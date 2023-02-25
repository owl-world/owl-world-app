import { useQuery } from 'react-query';
import { Post } from '@/types/post';
import { fetcher } from '../fetcher';

type GetPopularPostsResponse = {
  data: Post[];
};

const getPopularPosts = async () => {
  const res = await fetcher.get<GetPopularPostsResponse>('/post/top');
  return res.data.data;
};

export const useGetPopularPosts = () => {
  const { data, isLoading, isError, refetch } = useQuery(['useGetPopularPosts'], () => getPopularPosts());

  return {
    posts: data,
    loading: isLoading,
    error: isError,
    refetch,
  };
};
