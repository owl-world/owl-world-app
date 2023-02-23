import React from 'react';
import { SplashProvider } from './src/providers/SplashProvider';
import { RootNavigation } from './src/screens/Stack';

const App = () => (
  <SplashProvider>
    <RootNavigation />
  </SplashProvider>
);

export default App;
