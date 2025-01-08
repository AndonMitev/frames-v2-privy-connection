'use client';

import { useEffect, useState } from 'react';
import sdk from '@farcaster/frame-sdk';
import { usePrivy } from '@privy-io/react-auth';
import { useAccount, useDisconnect } from 'wagmi';

export default function Demo() {
  const [isSDKLoaded, setIsSDKLoaded] = useState(false);
  const { login, logout, authenticated } = usePrivy();
  const { address } = useAccount();
  const { disconnect } = useDisconnect();

  useEffect(() => {
    const load = async () => {
      sdk.actions.ready();
    };
    if (sdk && !isSDKLoaded) {
      setIsSDKLoaded(true);
      load();
    }
  }, [isSDKLoaded]);

  return (
    <div className='w-[300px] mx-auto py-4 px-2'>
      <h1 className='text-2xl font-bold text-center mb-4'>Frames v2 Demo</h1>
      <button onClick={() => login()}>Connect wallet</button>
      <button
        onClick={() => {
          disconnect();
          logout();
        }}
      >
        Logout
      </button>
      <p>{address}</p>
    </div>
  );
}
