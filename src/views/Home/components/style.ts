import { Flex, Text } from '@/components/elements';
import { styled } from '@/theme';

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
export const RoutePageHeader = styled(Flex, {
  width: '$percent$100',
  justifyContent: 'space-between !important',
  alignItems: 'center !important',
  padding: '$px$1 $rem$5 0px',
  '@lg_max': {
    padding: '$px$1 $rem$4_5 0px',
  },
  '@md_max': {
    padding: '$px$1 $rem$3 0px',
    flexDirection: 'column !important',
    gap: '$px$10',
  },
  '@sm_max': {
    padding: '0px $px$5 0px',
  },
});
