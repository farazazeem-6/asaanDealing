'use client';
import { Loader } from '@/components/elements';
import { globalStyles } from '@/theme';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);

  globalStyles();

  //this is for preventing hydration mismatch when we relaod the page...
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Loader />;
  }

  return <>hello</>;
}
