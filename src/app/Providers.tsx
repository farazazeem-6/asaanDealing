'use client';
import { ThemeProvider } from 'next-themes';
import { ThemeSync } from './ThemeSync';
import { Loader } from '@/components/elements';
import { useEffect, useState } from 'react';
import { Header } from '@/layout/Header';
import { globalStyles } from '@/theme';
import { I18nProvider } from '@/components/providers';
import { Footer } from '@/layout/Footer';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  const [mounted, setMounted] = useState(false);
  globalStyles();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Loader />;
  }
  return (
    <I18nProvider>
      <ThemeProvider attribute={'class'} defaultTheme="light">
        <ThemeSync />
        <Header />
        {children}
        <Footer />
      </ThemeProvider>
    </I18nProvider>
  );
};
