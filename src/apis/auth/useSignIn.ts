import { useMutation } from 'react-query';
import { SignInRequest } from '@/types/auth';
import { fetcher } from '../fetcher';

const signIn = (request: SignInRequest) => {
  return fetcher.post('/auth/login', request);
};

export const useSignIn = () => {
  return useMutation({
    mutationFn: signIn,
  });
};
