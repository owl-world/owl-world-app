import { useMutation } from 'react-query';
import { SignUpEntity } from '@/types/member';
import { fetcher } from '../fetcher';

const signUp = (request: SignUpEntity) => {
  return fetcher.post('/member', request);
};

export const useSignUp = () => {
  return useMutation({
    mutationFn: signUp,
  });
};
