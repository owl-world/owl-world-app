import { useSignIn } from '@/apis/auth';
import { onLogin } from '@/slices/auth';
import { SignInRequest } from '@/types/auth';
import { useAppDispatch, useAppSelector } from './redux';

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const { accessToken } = useAppSelector(selector => selector.auth);
  const { mutateAsync: postSignIn } = useSignIn();

  const signIn = async (request: SignInRequest) => {
    await postSignIn(request, {
      onSuccess: ({ data }) => {
        dispatch(onLogin(data.data));
      },
    });
  };

  return {
    isLoggedIn: !!accessToken,
    signIn,
  };
};
