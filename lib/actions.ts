'use server';

import { cookies } from 'next/headers';

export async function logTokens() {
  const _cookies = await cookies();

  const authToken = _cookies.get('privy-token')?.value;
  const identityToken = _cookies.get('privy-id-token')?.value;

  console.log('authToken:', authToken);
  console.log('identityToken:', identityToken);

  return {
    authToken,
    identityToken,
  };
}
