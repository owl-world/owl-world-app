import { useMutation } from 'react-query';
import { LikeRequest } from '@/types/like';
import { fetcher } from '../fetcher';

const postUnLike = ({ targetId, type }: LikeRequest) => {
  return fetcher.delete('/like', {
    params: {
      targetId,
      targetType: type,
    },
  });
};

export const usePostUnLike = () => {
  return useMutation({
    mutationFn: postUnLike,
  });
};
