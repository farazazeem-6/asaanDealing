import { Box, Flex, Text } from '@/components/elements';
import { styled } from '@/theme';

export const TopExpertWrapper = styled(Box, {
  marginTop: '$px$50',
  '@sm_max': {
    marginTop: '$px$30',
  },
});

export const ViewMoreLink = styled(Text, {
  color: '$dark !important',
  fontSize: '$px$12',
  fontWeight: '$fontWeight$extrabold',
  cursor: 'pointer',
  gap: '$px$4',

  '@sm_max': {
    fontSize: '$px$10',
  },
});

export const HeadingRow = styled(Flex, {
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '$percent$100',
  boxSizing: 'border-box',
  flexWrap: 'wrap',
  gap: '$px$10',

  '@sm_max': {
    flexDirection: 'column !important',
    alignItems: 'flex-end',
    gap: '$px$5',
  },
});
export const TopExpertBody = styled(Flex, {
  padding: '$rem$2_5 $rem$5',
  flexDirection: 'column !important',
  '@lg_max': {
    padding: '$rem$2 $rem$4_5',
  },
  '@md_max': {
    padding: '$rem$2 $rem$3',
  },
  '@sm_max': {
    padding: '$rem$2 $px$1',
  },
});

export const CardsGrid = styled(Box, {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
  gap: '$px$16',
  marginTop: '$px$24',

  '@lg_max': {
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
  },
  '@md_max': {
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '$px$10',
  },
  '@sm_max': {
    gap: '$gap$10',
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  },
  '@xs_max': {
    gap: '$gap$8',
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  },
  '@xxs_max': {
    gap: '$gap$6',
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  },
});
