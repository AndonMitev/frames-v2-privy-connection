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
      version: '1',
      name: 'Example Frame',
      iconUrl: 'https://frames-v2-privy-connection.vercel.app/icon.png',
      homeUrl: 'https://frames-v2-privy-connection.vercel.app',
      imageUrl: 'https://frames-v2-privy-connection.vercel.app/image.png',
      buttonTitle: 'Check this out',
      splashImageUrl:
        'https://frames-v2-privy-connection.vercel.app/splash.png',
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
