import { useQuery } from 'react-query';
import { Post } from '@/types/post';
import { fetcher } from '../fetcher';

type GetPostResponse = {
  data: Post;
};

const getFreePost = async (postId: number) => {
  const res = await fetcher.get<GetPostResponse>(`/post/${postId}`);
  return res.data.data;
};

export const useGetFreePost = (postId: number) => {
  const { data, isLoading, isError, refetch } = useQuery(['useGetFreePost', postId], () => getFreePost(postId));

  return {
    post: data,
    loading: isLoading,
    error: isError,
    refetch,
  };
};
