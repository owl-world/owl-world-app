import { useMutation } from 'react-query';
import { SignInEntity } from '@/types/auth';
import { fetcher } from '../fetcher';

const signIn = (request: SignInEntity) => {
  return fetcher.post('/auth/login', request);
};

export const useSignIn = () => {
  return useMutation({
    mutationFn: signIn,
  });
};
