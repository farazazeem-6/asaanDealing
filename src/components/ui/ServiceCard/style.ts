import { Box, Flex, Text } from '@/components/elements';
import { CardsShimmer, styled } from '@/theme';

export const ServiceCardWrapper = styled(Box, {
  padding: '$px$8',
  border: '$px$1 solid $lightGrayLine',
  borderRadius: '$px$12',
  cursor: 'pointer',
  background: '$categoryCardBg',
});
export const ServiceCardImage = styled(Box, {
  position: 'relative',
  width: '$percent$100',
  height: '$px$160',
  borderRadius: '$px$12',
  overflow: 'hidden',
  marginBottom: '$px$10',

  '& img': {
    width: '$percent$100',
    height: '$percent$100',
    objectFit: 'cover',
    transition: 'transform 0.3s ease',
  },

  '@sm_max': {
    height: '$px$120',
    marginBottom: '$px$10',
  },

  '@xs_max': {
    height: '$px$100',
    marginBottom: '$px$8',
  },
});
export const ServiceCardTitle = styled(Text, {
  color: '$primaryHeading !important',
  fontSize: '$px$13',
  fontWeight: '$fontWeight$bold',
  width: '$percent$80',
});
export const ServiceCardDesc = styled(Text, {
  color: '$secondryHeading !important',
  fontSize: '$px$12',
});
export const ServiceCardHeader = styled(Flex, {
  justifyContent: 'space-between !important',
  marginBottom: '$px$8',
});

export const ImgFallBackDiv = styled(Flex, {
  width: '$percent$100',
  height: '$percent$100',
  alignItems: 'center !important',
  justifyContent: 'center !important',
  backgroundColor: '$skeletonWhite',
  color: '$mediumLightGray',
});

export const SkeletonBase = styled(Box, {
  backgroundColor: '$lightGray',
  backgroundImage: '$skeletonGradient',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '$px$800 $percent$100',
  display: 'inline-block',
  position: 'relative',
  animation: `${CardsShimmer} 1.2s linear infinite forwards`,
});
