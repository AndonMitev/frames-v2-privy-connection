'use client';

import { useEffect, useState, createContext, useContext } from 'react';
import sdk, { Context } from '@farcaster/frame-sdk';
import { useLoginToFrame } from '@privy-io/react-auth/farcaster';
import { usePrivy } from '@privy-io/react-auth';

const FrameContext = createContext<{
  isSDKLoaded: boolean;
  frameContext: Context.FrameContext | null;
}>({
  isSDKLoaded: false,
  frameContext: null
});

export const useFrameContext = () => {
  const context = useContext(FrameContext);
  if (!context) {
    throw new Error('useFrame must be used within a FrameProvider');
  }
  return context;
};

export default function FrameProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [isSDKLoaded, setIsSDKLoaded] = useState(false);
  const [frameContext, setFrameContext] = useState<Context.FrameContext | null>(
    null
  );
  const { ready, authenticated, user } = usePrivy();
  const { initLoginToFrame, loginToFrame } = useLoginToFrame();

  // Setup SDK
  useEffect(() => {
    const load = async () => {
      const frameContext = await sdk.context;
      console.log('frameContext', frameContext);
      setFrameContext(frameContext);
      sdk.actions.ready();
    };

    if (sdk && !isSDKLoaded) {
      setIsSDKLoaded(true);
      load();
    }
  }, [isSDKLoaded]);

  // Login to Frame
  useEffect(() => {
    if (!frameContext) {
      return;
    }

    if (ready && !authenticated) {
      const login = async () => {
        console.log('Logging in to Frame');
        const { nonce } = await initLoginToFrame();
        const result = await sdk.actions.signIn({ nonce: nonce });

        await loginToFrame({
          message: result.message,
          signature: result.signature
        });
        console.log('Logged in to Frame');
      };
      login();
    }
  }, [ready, authenticated, frameContext]);

  // Create Embedded Wallet
  // useEffect(() => {
  //   if (
  //     authenticated &&
  //     ready &&
  //     user &&
  //     user.linkedAccounts.filter(
  //       (account) =>
  //         account.type === 'wallet' && account.walletClientType === 'privy'
  //     ).length === 0
  //   ) {
  //     const generateWallet = async () => {
  //       console.log('Creating embedded wallet');
  //       const wallet = await createWallet();
  //       console.log('Embedded wallet created', wallet);
  //     };
  //     generateWallet();
  //   }
  // }, [authenticated, ready, user]);

  useEffect(() => {
    if (!frameContext || !authenticated) {
      return;
    }

    const addFrame = async () => {
      await sdk.actions.addFrame();
    };

    if (!frameContext?.client.added) {
      addFrame();
    }
  }, [frameContext, authenticated, ready, user]);

  return (
    <FrameContext.Provider value={{ isSDKLoaded, frameContext }}>
      {children}
    </FrameContext.Provider>
  );
}
