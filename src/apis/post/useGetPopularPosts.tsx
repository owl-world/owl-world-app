import { useQuery } from 'react-query';
import { PostResponse } from '@/types/post';
import { fetcher } from '../fetcher';

type GetPopularPostsResponse = {
  data: PostResponse;
};

const getPopularPosts = async () => {
  const res = await fetcher.get<GetPopularPostsResponse>('/post');
  return res.data.data;
};

export const useGetPopularPosts = () => {
  const { data, isLoading, isError, refetch } = useQuery(['useGetPopularPosts'], () => getPopularPosts());

  return {
    posts: data?.posts.slice(0, 3),
    loading: isLoading,
    error: isError,
    refetch,
  };
};
