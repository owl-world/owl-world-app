import { useMutation, useQueryClient } from 'react-query';
import { CommentRequest } from '@/types/comment';
import { fetcher } from '../fetcher';

const postComment = ({ postId, comment }: CommentRequest) => {
  return fetcher.post('/comment', {
    postId,
    content: comment,
  });
};

export const usePostComment = (postId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postComment,
    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: ['useGetFreePost', postId],
      });
    },
  });
};
