import { styled } from '@/theme';
import { Flex, Box, Text, NextImage } from '@/components/elements';

export const CardWrapper = styled(Flex, {
  flexDirection: 'column !important',
  alignItems: 'center !important',
  justifyContent: 'center !important',
  border: '$px$1 solid $lightGrayLine',
  borderRadius: '$px$16',
  padding: '$px$14',
  height: '$px$170',
  position: 'relative',
  overflow: 'hidden',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  background: '$categoryCardBg',
  boxShadow: '$shadows$categoryCard',
  '&:hover': {
    boxShadow: '$shadows$categoryCardHover',
  },
  '@md_max': {
    height: '$px$140',
  },
  '@sm_max': {
    padding: '$px$10',
  },
  '@xs_max': {
    padding: '$px$6',
  },
});

export const HoverBackground = styled(Box, {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '$percent$100',
  height: '$percent$100',
  zIndex: '$ul$0',
  backgroundSize: 'cover',
  backgroundPosition: 'center',

  transform: 'translateY(-$percent$100)',
  transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',

  //   when someone hover on the parent container (CardWrapper)
  [`${CardWrapper}:hover &`]: {
    transform: 'translateY(0)',
  },

  '&::after': {
    content: '""',
    position: 'absolute',
    inset: '$ul$0',
    background: '$shadows$imgOverlay',
  },
});

export const ContentLayer = styled(Flex, {
  flexDirection: 'column !important',
  alignItems: 'center',
  gap: '$rem$1',
  zIndex: '$ul$1',
  position: 'relative',
  width: '$percent$100',
});

export const IconCircle = styled(Flex, {
  width: '$px$70',
  height: '$px$70',
  borderRadius: '$percent$50',
  backgroundColor: '$veryLightGray',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'background-color 0.3s',
  flexShrink: '0',

  [`${CardWrapper}:hover &`]: {
    backgroundColor: '$white',
  },
  '@sm_max': {
    height: '$px$50',
    width: '$px$50',
  },
});

export const ContentImg = styled(NextImage, {
  objectFit: 'contain',
  width: '$px$50',
  height: '$px$50',
  '@sm_max': {
    width: '$px$30',
    height: '$px$30',
  },
});

export const CategoryTitle = styled(Text, {
  fontWeight: '$fontWeight$bold',
  fontSize: '$px$12',
  textAlign: 'center',
  color: '$liteDark',
  transition: 'color 0.3s',

  [`${CardWrapper}:hover &`]: {
    color: '$white',
  },
  '@md_max': {
    fontSize: '$px$10',
  },
  '@sm_max': {
    fontSize: '$px$9',
  },
});
