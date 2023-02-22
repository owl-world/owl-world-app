import React, { PropsWithChildren, useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';

export const SplashProvider = ({ children }: PropsWithChildren) => {
  useEffect(() => {
    const tick = setTimeout(() => {
      SplashScreen.hide();
    }, 1000 * 2);

    return () => clearInterval(tick);
  }, []);

  return <React.Fragment>{children}</React.Fragment>;
};
