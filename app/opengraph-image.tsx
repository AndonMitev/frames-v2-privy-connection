import { ImageResponse } from 'next/og';
import NextImage from 'next/image';

export const alt = 'Farcaster Frames V2 Demo';
export const size = {
  width: 600,
  height: 400
};

export const contentType = 'image/jpeg';

export default async function Image() {
  return new ImageResponse(
    (
      <NextImage
        src='/pooh.jpeg'
        alt='Farcaster Frames V2 Demo'
        width={600}
        height={400}
      />
    ),
    {
      ...size
    }
  );
}
