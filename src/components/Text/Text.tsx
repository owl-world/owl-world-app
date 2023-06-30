import React, { PropsWithChildren } from 'react';
import { Text as ReactNativeText, TextProps } from 'react-native';

type Props = TextProps & {};

export const Text = React.memo(({ children, style: styleOverride, ...rest }: PropsWithChildren<Props>) => {
  const defaultStyle = {
    fontFamily: 'Pretendard-Medium',
  };

  const style = [defaultStyle, styleOverride];

  return (
    <ReactNativeText style={style} {...rest}>
      {children}
    </ReactNativeText>
  );
});
