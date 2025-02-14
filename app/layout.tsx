import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Providers from './providers/Providers';
import { cn } from '@/lib/utils';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap'
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Frame.app - Web3 Wallet Connection',
  description: 'A modern web3 wallet connection interface',
  authors: [{ name: 'Frame.app' }],
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
      className={cn('dark', geistSans.variable, geistMono.variable)}
    >
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          'selection:bg-primary/10 selection:text-primary'
        )}
      >
        <Providers>
          <main className='relative flex min-h-screen flex-col'>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
