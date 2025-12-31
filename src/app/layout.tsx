import { ThemeProvider } from 'next-themes';
import { ThemeSync } from './ThemeSync';
import Head from './head';
import { montserrat } from '@/theme';
import Providers from './Providers';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head />
      <body className={`${montserrat.className}`}>
        <Providers>
          <ThemeProvider attribute={'class'} defaultTheme="light">
            <ThemeSync />
            {children}
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
