import { Box, Flex } from '@/components/elements';
import { styled } from '@/theme';

export const SubCategoryWrapper = styled(Box, {
  padding: '$rem$2_5 $rem$5',
  '@sm_max': {
    marginTop: '$px$30',
  },
});
export const ServiceCardGrid = styled(Box, {
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
export const SubCategoryHeader = styled(Flex, {
  width: '$percent$100',
  justifyContent: 'space-between !important',
  marginTop: '$px$40',
  alignItems: 'center !important',
});
