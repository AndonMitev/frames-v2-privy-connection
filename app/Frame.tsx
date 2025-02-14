'use client';

import { usePrivy } from '@privy-io/react-auth';
import { useFrameContext } from './providers/FrameProvider';
import { useAccount } from 'wagmi';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Wallet, Box, User, ExternalLink } from 'lucide-react';

export default function Frame() {
  const { frameContext } = useFrameContext();
  const { user } = usePrivy();
  const { address } = useAccount();
  const embeddedWallet = user?.linkedAccounts.filter(
    (account) =>
      account.type === 'wallet' && account.walletClientType === 'privy'
  );

  return (
    <div className='w-full max-w-7xl mx-auto bg-gradient-to-br from-zinc-900 via-black to-zinc-900 p-6 md:p-8'>
      <div className='absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]'></div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className='relative'
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className='text-center mb-16'
        >
          <h1 className='text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-100 to-neutral-400'>
            Wallet Connection Status
          </h1>
          <p className='mt-4 text-lg text-neutral-400 max-w-2xl mx-auto'>
            View detailed information about your wallet connection, Frame
            context, and user details
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {/* Frame Context Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className='group h-full border border-neutral-800 bg-neutral-900/40 backdrop-blur-xl hover:bg-neutral-900/60 transition-all'>
              <CardHeader>
                <CardTitle className='flex items-center space-x-3'>
                  <div className='p-2.5 rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 transition-colors'>
                    <Box className='w-5 h-5' />
                  </div>
                  <span className='bg-gradient-to-br from-neutral-100 to-neutral-400 bg-clip-text text-transparent'>
                    Frame Context
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className='space-y-4'>
                  <p className='text-sm text-neutral-400'>
                    Current Frame SDK context and interaction details
                  </p>
                  <pre className='rounded-lg bg-neutral-950/50 p-4 overflow-auto max-h-[280px] text-sm text-neutral-300 scrollbar-thin scrollbar-thumb-neutral-800 scrollbar-track-transparent'>
                    {JSON.stringify(frameContext, null, 2) || 'Not connected'}
                  </pre>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Privy User Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className='group h-full border border-neutral-800 bg-neutral-900/40 backdrop-blur-xl hover:bg-neutral-900/60 transition-all'>
              <CardHeader>
                <CardTitle className='flex items-center space-x-3'>
                  <div className='p-2.5 rounded-lg bg-purple-500/10 text-purple-400 group-hover:bg-purple-500/20 transition-colors'>
                    <User className='w-5 h-5' />
                  </div>
                  <span className='bg-gradient-to-br from-neutral-100 to-neutral-400 bg-clip-text text-transparent'>
                    Privy User Data
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className='space-y-4'>
                  <p className='text-sm text-neutral-400'>
                    Your authenticated Privy user information and linked
                    accounts
                  </p>
                  <pre className='rounded-lg bg-neutral-950/50 p-4 overflow-auto max-h-[280px] text-sm text-neutral-300 scrollbar-thin scrollbar-thumb-neutral-800 scrollbar-track-transparent'>
                    {user ? JSON.stringify(user, null, 2) : 'Not authenticated'}
                  </pre>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Embedded Wallet Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className='group h-full border border-neutral-800 bg-neutral-900/40 backdrop-blur-xl hover:bg-neutral-900/60 transition-all'>
              <CardHeader>
                <CardTitle className='flex items-center space-x-3'>
                  <div className='p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20 transition-colors'>
                    <Wallet className='w-5 h-5' />
                  </div>
                  <span className='bg-gradient-to-br from-neutral-100 to-neutral-400 bg-clip-text text-transparent'>
                    Embedded Wallet
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className='space-y-4'>
                  <p className='text-sm text-neutral-400'>
                    Privy Embedded Wallet
                    {JSON.stringify(embeddedWallet, null, 2)}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Wagmi Address Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className='group h-full border border-neutral-800 bg-neutral-900/40 backdrop-blur-xl hover:bg-neutral-900/60 transition-all'>
              <CardHeader>
                <CardTitle className='flex items-center space-x-3'>
                  <div className='p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20 transition-colors'>
                    <Wallet className='w-5 h-5' />
                  </div>
                  <span className='bg-gradient-to-br from-neutral-100 to-neutral-400 bg-clip-text text-transparent'>
                    Wagmi Address
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className='space-y-4'>
                  <p className='text-sm text-neutral-400'>
                    Your currently connected Ethereum wallet address
                  </p>
                  <div className='rounded-lg bg-neutral-950/50 p-4 font-mono text-sm text-neutral-300'>
                    {address ? (
                      <div className='flex items-center justify-between gap-2'>
                        <span className='truncate'>{address}</span>
                        <a
                          href={`https://basescan.org/address/${address}`}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='text-neutral-400 hover:text-neutral-200 transition-colors'
                        >
                          <ExternalLink className='w-4 h-4' />
                        </a>
                      </div>
                    ) : (
                      <span className='text-neutral-500'>Not Connected</span>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Gradient Orbs */}
        <div className='fixed inset-0 -z-10 overflow-hidden'>
          <div className='absolute -top-[40%] -right-[40%] w-[80%] h-[80%] rounded-full bg-purple-500/10 blur-[128px]' />
          <div className='absolute -bottom-[40%] -left-[40%] w-[80%] h-[80%] rounded-full bg-blue-500/10 blur-[128px]' />
        </div>
      </motion.div>
    </div>
  );
}
