import { Box, Text } from '@/components/elements';
import { styled } from '@/theme';

export const HomeCategoriesWrapper = styled(Box, {});
export const Heading = styled(Text, {
  fontSize: '$rem$2',
  fontWeight: '$fontWeight$bold',
  marginBottom: '$px$10',
  textAlign: 'center',
  '@md_max': {
    fontSize: '$rem$1_68',
  },
});
export const SubHeading = styled(Text, {
  fontSize: '$rem$1',
  textAlign: 'center',
});
