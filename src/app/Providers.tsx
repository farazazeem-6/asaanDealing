'use client';

import { ThemeProvider } from 'next-themes';
import { ThemeSync } from './ThemeSync';
import { Loader } from '@/components/elements';
import { useEffect, useState } from 'react';
import { Header } from '@/layout/Header';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Loader />;
  }

  return (
    <ThemeProvider attribute={'class'} defaultTheme="light">
      <ThemeSync />
      <Header />
      {children}
    </ThemeProvider>
  );
};
