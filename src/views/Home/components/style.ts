import { Text } from '@/components/elements';
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
