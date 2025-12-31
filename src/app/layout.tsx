import { ThemeProvider } from 'next-themes';
import { ThemeSync } from './ThemeSync';
import Head from './head';
import { montserrat } from '@/theme';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head />
      <body className={`${montserrat.className}`}>
          <ThemeProvider attribute={'class'} defaultTheme="light">
            <ThemeSync />
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
