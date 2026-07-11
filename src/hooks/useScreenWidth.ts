import { useState, useEffect, useMemo } from 'react';

// Breakpoints matching theme configuration
const BREAKPOINTS = {
  xxs: 380,
  xs: 420,
  sm: 576,
  md: 768,
  lg: 1000,
  xl: 1200,
  xxl: 1440,
  xxxl: 1780,
} as const;

export const useScreenWidth = () => {
  const [screenWidth, setScreenWidth] = useState<number>(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set client-side flag
    setIsClient(true);

    // Set initial width
    setScreenWidth(window.innerWidth);

    // Handle resize
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Calculate breakpoint flags based on screen width
  // These match the defaultMedia queries from theme/common.ts
  const breakpointFlags = useMemo(() => {
    if (!isClient) {
      return {
        // Media query flags (matches defaultMedia)
        isXs: false,
        isSm: false,
        isMd: false,
        isLg: false,
        isXl: false,
        // Max-width breakpoints (matches media queries)
        isMax640: false,
        isMax1100: false,
        isMax1300: false,
        isMax1400: false,
        isMax1550: false,
        // Max-width breakpoints based on theme breakpoints
        isXxsMax: false,
        isXsMax: false,
        isSmMax: false,
        isMdMax: false,
        isLgMax: false,
        isXlMax: false,
        isXxlMax: false,
        // Legacy flags for backward compatibility
        isMobile: false,
        isTablet: false,
        isDesktop: false,
      };
    }

    return {
      // Media query flags (matches defaultMedia exactly)
      isXs: screenWidth <= 652,
      isSm: screenWidth >= 960,
      isMd: screenWidth >= 1280,
      isLg: screenWidth >= 1400,
      isXl: screenWidth >= 1600,
      // Max-width breakpoints (matches media queries)
      isMax640: screenWidth <= 640,
      isMax1100: screenWidth <= 1100,
      isMax1300: screenWidth <= 1300,
      isMax1400: screenWidth <= 1400,
      isMax1550: screenWidth <= 1550,
      // Max-width breakpoints based on theme breakpoints
      isXxsMax: screenWidth <= BREAKPOINTS.xxs,
      isXsMax: screenWidth <= BREAKPOINTS.xs,
      isSmMax: screenWidth <= BREAKPOINTS.sm,
      isMdMax: screenWidth <= BREAKPOINTS.md,
      isLgMax: screenWidth <= BREAKPOINTS.lg,
      isXlMax: screenWidth <= BREAKPOINTS.xl,
      isXxlMax: screenWidth <= BREAKPOINTS.xxl,
      // Legacy flags for backward compatibility
      isMobile: screenWidth < BREAKPOINTS.md,
      isTablet: screenWidth >= BREAKPOINTS.md && screenWidth < 1024,
      isDesktop: screenWidth >= 1024,
    };
  }, [screenWidth, isClient]);

  return {
    screenWidth,
    isClient,
    ...breakpointFlags,
  };
};
