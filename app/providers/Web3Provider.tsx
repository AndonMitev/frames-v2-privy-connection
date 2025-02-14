'use client';

import { ReactNode } from 'react';
import { PrivyClientConfig, PrivyProvider } from '@privy-io/react-auth';
import { createConfig, WagmiProvider } from '@privy-io/wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { base } from 'wagmi/chains';
import { toSolanaWalletConnectors } from '@privy-io/react-auth/solana';
import { farcasterFrame } from '@farcaster/frame-wagmi-connector';
import { http } from 'wagmi';

type Web3ProviderProps = {
  children: ReactNode;
};

const queryClient = new QueryClient();

const privyConfig: PrivyClientConfig = {
  appearance: {
    walletChainType: 'ethereum-and-solana',
    walletList: ['detected_wallets']
  },
  embeddedWallets: {
    createOnLogin: 'all-users',
    showWalletUIs: false
  },
  externalWallets: {
    solana: {
      connectors: toSolanaWalletConnectors({ shouldAutoConnect: false })
    }
  },
  loginMethods: ['farcaster', 'twitter', 'wallet']
};

const config = createConfig({
  chains: [base],
  transports: {
    [base.id]: http()
  },
  connectors: [farcasterFrame()]
});

export const Web3Provider = ({ children }: Web3ProviderProps) => {
  return (
    <PrivyProvider
      appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID as string}
      config={privyConfig}
    >
      <QueryClientProvider client={queryClient}>
        <WagmiProvider config={config}>{children}</WagmiProvider>
      </QueryClientProvider>
    </PrivyProvider>
  );
};
