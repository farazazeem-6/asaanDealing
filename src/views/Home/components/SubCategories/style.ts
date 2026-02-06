import { Box, Flex } from '@/components/elements';
import { styled } from '@/theme';

export const SubCategoryWrapper = styled(Box, {
  padding: '$rem$2_5 $rem$5',
  '@lg_max': {
    padding: '$rem$2 $rem$4_5',
  },
  '@md_max': {
    padding: '$rem$2 $rem$3',
  },
  '@sm_max': {
    padding: '0px $px$1',
  },
});
export const ServiceCardGrid = styled(Box, {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
  gap: '$px$16',
  '@lg_max': {
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
  },
  '@md_max': {
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '$px$10',
  },
  '@sm_max': {
    gap: '$px$10',
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  },
  '@xs_max': {
    gap: '$px$12',
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  },
  '@xxs_max': {
    gap: '$px$10',
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  },
});
export const SubCategoryHeader = styled(Flex, {
  width: '$percent$100',
  justifyContent: 'space-between !important',
  alignItems: 'center !important',
  '@md_max': {
    flexDirection: 'column !important',
    gap: '$px$10',
  },
});
