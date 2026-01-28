import { Greycliff } from '@/theme';
import { Providers } from './Providers';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Asaan Dealing',
  description:
    'Asaan Dealing - The easiest way to manage your daily tasks and services.',
  icons: { icon: { url: '/asaan_dealing.svg', type: 'image/svg+xml' } },
};
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      style={{ fontSize: 'clamp(12px, 1vw, 16px)' }}
      lang="en"
      suppressHydrationWarning
    >
      <body
        style={{ margin: '0', padding: '0' }}
        className={Greycliff.className}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
