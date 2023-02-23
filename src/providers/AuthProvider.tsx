import React, { PropsWithChildren, useEffect } from 'react';
import { useAppDispatch } from '@/hooks/redux';
import { initAuth } from '@/slices/auth';

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initAuth());
  }, [dispatch]);

  return <React.Fragment>{children}</React.Fragment>;
};
