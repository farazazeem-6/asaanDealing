'use client';

import { useEffect } from 'react';
import { useTheme } from 'next-themes';
import { lightTheme, darkTheme } from '@/theme';

export function ThemeSync() {
  const { theme } = useTheme();

  useEffect(() => {
    // Remove both theme classes first
    document.documentElement.classList.remove(lightTheme, darkTheme);

    // Add the correct Stitches theme class
    if (theme === 'dark') {
      document.documentElement.classList.add(darkTheme);
    } else {
      document.documentElement.classList.add(lightTheme);
    }
  }, [theme]);

  return null;
}
