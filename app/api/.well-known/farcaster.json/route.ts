export async function GET() {
  const url = process.env.NEXT_PUBLIC_APP_URL;
  console.log('CALLED?');

  const config = {
    accountAssociation: {
      header:
        'eyJmaWQiOjQ5OTIwNSwidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweGEwQjA1MDZBN0UxMEQyODQ5QUIzMzkxNTI0ODNkM0UwNGEwRDUwMTMifQ',
      payload: 'eyJkb21haW4iOiJjZDc0YmM5NjNiZTMubmdyb2suYXBwIn0',
      signature:
        'MHhlMDZmZjE0M2RmNTk3YWY3YzdhNTdiNTJmOTUzYTU5ZjRkZDQ4N2FmNDQwZTU5ZDA0OTEyYjc5Zjg4ZDRmMjIxMTNkMjk4NWUyNWIwYWFmMGFhMzg4YmQ4ZGRlMmM3MjMzNmU3MmE1YWUzZjIxMDk1MmU4YzcyNmNkZmFiMjJiMjFi'
    },
    frame: {
      version: '1',
      name: 'Example Frame',
      iconUrl: `${url}/next.svg`,
      homeUrl: `${url}`,
      imageUrl: `${url}/opengraph-image.png`,
      buttonTitle: 'Check this out',
      splashImageUrl: `${url}/next.svg`,
      splashBackgroundColor: '#f5f0ec',
      webhookUrl: `${url}/api/webhook`
    }
  };

  return new Response(JSON.stringify(config), {
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
