import { useQuery } from 'react-query';
import { PostsResponse } from '@/types/post';
import { fetcher } from '../fetcher';

type GetPopularPostsResponse = {
  data: PostsResponse;
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
