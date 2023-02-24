import { useQuery } from 'react-query';
import { PostResponse } from '@/types/post';
import { fetcher } from '../fetcher';

type GetPostsResponse = {
  data: PostResponse;
};

const getPosts = async () => {
  const res = await fetcher.get<GetPostsResponse>('/post');
  return res.data.data;
};

export const useGetPosts = () => {
  const { data, isLoading, isError, refetch } = useQuery(['useGetPosts'], () => getPosts());

  return {
    posts: data?.posts,
    loading: isLoading,
    error: isError,
    refetch,
  };
};
