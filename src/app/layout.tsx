import { globalStyles, Greycliff } from '@/theme';
import { Providers } from './Providers';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Asaan Dealing',
  description:
    'Asaan Dealing - The easiest way to manage your daily tasks and services.',
  icons: {
    icon: '/asaan_dealing.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  globalStyles();
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
