import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider as ReduxProvider } from 'react-redux';
import { AuthProvider } from './src/providers/AuthProvider';
import { SplashProvider } from './src/providers/SplashProvider';
import { RootNavigation } from './src/screens/Stack';
import store from './src/slices';

const queryClient = new QueryClient();

const App = () => (
  <SplashProvider>
    <ReduxProvider store={store}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <RootNavigation />
        </AuthProvider>
      </QueryClientProvider>
    </ReduxProvider>
  </SplashProvider>
);

export default App;
