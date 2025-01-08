'use client';

import { base } from 'wagmi/chains';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { farcasterFrame } from '@farcaster/frame-wagmi-connector';
import { WagmiProvider } from '@privy-io/wagmi';
import { createConfig } from '@privy-io/wagmi';
import { PrivyProvider } from '@privy-io/react-auth';
import { http } from 'viem';

export const config = createConfig({
  chains: [base],
  transports: {
    [base.id]: http()
  },
  connectors: [farcasterFrame()]
});

const queryClient = new QueryClient();

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <PrivyProvider appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID as string}>
      <QueryClientProvider client={queryClient}>
        <WagmiProvider config={config}>{children}</WagmiProvider>
      </QueryClientProvider>
    </PrivyProvider>
  );
}
