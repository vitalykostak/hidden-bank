import { FC } from 'react';
import { PaperProvider } from 'react-native-paper';
import { Navigation } from './navigation';
import { StoreProvider } from './providers/store-provider';

export const App: FC = () => {
  return (
    <PaperProvider>
      <StoreProvider>
        <Navigation />
      </StoreProvider>
    </PaperProvider>
  );
};
