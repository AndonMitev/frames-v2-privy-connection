import { readFile } from 'fs/promises';
import { ImageResponse } from 'next/og';
import { join } from 'path';

// export const alt = 'Farcaster Frames V2 Demo';
// export const size = {
//   width: 600,
//   height: 400
// };

export default async function Image() {
  const logoData = await readFile(join(process.cwd(), '/public/pooh.jpeg'));
  const logoSrc = Uint8Array.from(logoData).buffer;

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <img src={logoSrc as any} height='400' width='600' />
      </div>
    )
  );
}
