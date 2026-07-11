import { Box } from '@/components/elements';
import { styled } from '@/theme';

export const ServiceCardGrid = styled(Box, {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
  gap: '$px$16',
  padding: '$px$10 $rem$5 $px$20',
  '@lg_max': {
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    padding: '$px$10 $rem$4_5 $px$10',
  },
  '@md_max': {
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '$px$10',
    padding: '$px$10 $rem$3 $px$10',
  },
  '@sm_max': {
    gap: '$px$10',
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    padding: '$px$5 $px$5 $px$8',
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
