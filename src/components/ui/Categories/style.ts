import { Box } from '@/components/elements';
import { styled } from '@/theme';

export const CategoryCardsGrid = styled(Box, {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax($px$200, 1fr))',
  gap: '$rem$1_25',
  padding: '$px$10 $rem$6_25',
  '@lg_max': {
    padding: '$rem$2_5 $rem$5',
    gridTemplateColumns: 'repeat(auto-fill, minmax($px$180, 1fr))',
  },
  '@md_max': {
    padding: '$rem$3 $rem$4',
    gridTemplateColumns: 'repeat(auto-fill, minmax($px$140, 1fr))',
  },
  '@sm_max': {
    padding: '$rem$2_5 $rem$2',
    gridTemplateColumns: 'repeat(auto-fill, minmax($px$100, 1fr))',
  },
  '@xs_max': {
    padding: '$rem$2_5 $rem$1',
    gridTemplateColumns: 'repeat(auto-fill, minmax($px$80, 1fr))',
  },
});
