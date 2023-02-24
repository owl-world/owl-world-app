import { useMutation, useQueryClient } from 'react-query';
import { PostRequest } from '@/types/post';
import { fetcher } from '../fetcher';

const postFreePost = ({ content, title }: PostRequest) => {
  return fetcher.post('/post', {
    content,
    title,
  });
};

export const usePostFreePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postFreePost,
    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: ['useGetFreePosts'],
      });
    },
  });
};
