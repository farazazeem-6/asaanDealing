import { Box, Text } from '@/components/elements';
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
export const Heading = styled(Text, {
  fontSize: '$rem$2',
  fontWeight: '$fontWeight$bold',
  marginBottom: '$px$10',
  textAlign: 'center',
  '@sm_max': {
    fontSize: '$rem$1_87',
  },
});
export const SubHeading = styled(Text, {
  fontSize: '$rem$1',
  textAlign: 'center',
  '@sm_max': {
    fontSize: '$rem$0_93',
  },
});
export const CategoryCardsGrid = styled(Box, {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax($px$200, 1fr))',
  gap: '$rem$1_25',
  padding: '$rem$3_12 $rem$6_25',
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
