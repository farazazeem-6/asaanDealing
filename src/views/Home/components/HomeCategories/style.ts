import { Box } from '@/components/elements';
import { styled } from '@/theme';

export const HomeCategoriesWrapper = styled(Box, {
  marginTop: '$px$50',
  '@md_max': {
    marginTop: '$px$40',
  },
  '@sm_max': {
    marginTop: '$px$20',
  },
});
