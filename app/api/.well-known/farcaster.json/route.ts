export async function GET() {
  const config = {
    accountAssociation: {
      header:
        'eyJmaWQiOjQ5OTIwNSwidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweGEwQjA1MDZBN0UxMEQyODQ5QUIzMzkxNTI0ODNkM0UwNGEwRDUwMTMifQ',
      payload:
        'eyJkb21haW4iOiJmcmFtZXMtdjItcHJpdnktY29ubmVjdGlvbi52ZXJjZWwuYXBwIn0',
      signature:
        'MHgyYjlmZjNlNjM1M2Q2ZTNhZGFjYWVjZGZiYWNiNTMyNTFjMTg1MDM0NWM2ZTU1YzdjMDg4OTU1MWE2NjAyYzgyNjgwYWQwYTZkM2VjYzg0YWQ3ZWQyNzFkYmU0NDUwNjk5OWJiYWY4MzcwNzFlODc4NzRkMGI5OWY3ZjI1ZjdiMTFi'
    },
    frame: {
      version: 'next',
      name: 'Farcaster.json Well known',
      iconUrl: 'https://frames-v2-privy-connection.vercel.app/next.svg',
      homeUrl: 'https://frames-v2-privy-connection.vercel.app/',
      imageUrl:
        'https://frames-v2-privy-connection.vercel.app/opengraph-image.png',
      buttonTitle: 'Check this out fc.json',
      splashImageUrl: 'https://frames-v2-privy-connection.vercel.app/next.svg',
      splashBackgroundColor: '#eeccff',
      webhookUrl: 'https://frames-v2-privy-connection.vercel.app/api/webhook'
    }
  };

  return new Response(JSON.stringify(config), {
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
