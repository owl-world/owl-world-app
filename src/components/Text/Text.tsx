import React, { PropsWithChildren } from 'react';
import { Text as ReactNativeText, TextProps } from 'react-native';

type Props = TextProps & {};

export const Text = React.memo(({ children, ...rest }: PropsWithChildren<Props>) => {
  return <ReactNativeText {...rest}>{children}</ReactNativeText>;
});
