import { ReactNode } from 'react';

type ProvidersProps = {
  children: ReactNode;
};

import { Web3Provider } from './Web3Provider';
import FrameProvider from './FrameProvider';

export default function Providers({ children }: ProvidersProps) {
  return (
    <Web3Provider>
      <FrameProvider>{children}</FrameProvider>
    </Web3Provider>
  );
}
