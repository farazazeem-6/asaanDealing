import { Box } from '@/components/elements';
import { float, openFromShade, styled } from '@/theme';
import Image from 'next/image';

export const ImageWrapper = styled(Box, {
  position: 'relative',
  width: '$px$500',
  height: '$px$500',
  animation: `${openFromShade} 1s ease-out forwards, ${float} 4s ease-in-out infinite`,
  '@lg_max': {
    display: 'none',
  },
});

export const FloatingImage = styled(Image, {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '$percent$100',
  height: '$percent$100',
  objectFit: 'cover',

  opacity: '$ul$0',
  transform: 'scale(0.95)',
  transition: 'opacity 0.6s ease, transform 0.6s ease',

  '&[data-active="true"]': {
    opacity: '$ul$1',
    transform: 'scale(1)',
    zIndex: '$ul$2',
  },
});
