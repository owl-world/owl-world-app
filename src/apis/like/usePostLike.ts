import { useMutation } from 'react-query';
import { LikeRequest } from '@/types/like';
import { fetcher } from '../fetcher';

const postLike = ({ targetId, type }: LikeRequest) => {
  return fetcher.post('/like', {
    targetId,
    targetType: type,
  });
};

export const usePostLike = () => {
  return useMutation({
    mutationFn: postLike,
  });
};
