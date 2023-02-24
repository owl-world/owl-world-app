import { useQuery } from 'react-query';
import { PostsResponse } from '@/types/post';
import { fetcher } from '../fetcher';

type GetFreePostsResponse = {
  data: PostsResponse;
};

const getFreePosts = async () => {
  const res = await fetcher.get<GetFreePostsResponse>('/post');
  return res.data.data;
};

export const useGetFreePosts = () => {
  const { data, isLoading, isError, refetch } = useQuery(['useGetPosts'], () => getFreePosts());

  return {
    posts: data?.posts,
    loading: isLoading,
    error: isError,
    refetch,
  };
};
