import { Flex, Text } from '@/components/elements';
import { styled } from '@/theme';

export const HeroContainer = styled(Flex, {
  justifyContent: 'space-around',
});
export const HeroContent = styled(Flex, {
  flexDirection: 'column !important',
  maxWidth: '$px$500',
  width: '$percent$100',
  marginTop: '$px$80',

  '@sm_max': {
    marginTop: '$px$40',
  },
});
export const HeroSubTitle = styled(Text, {});
export const PopularHeading = styled(Text, {
  color: '$gray7',
  fontWeight: '$fontWeight$semibold',
  fontSize: '$rem$1',
  marginTop: '$rem$1',
  '@xxs_max': {
    display: 'none',
    fontSize: '$rem$2',
  },
});
export const PopularSearchWrapper = styled(Flex, {
  marginTop: '$px$10',
  '@md_max': {
    flexWrap: 'wrap',
  },
  '@xxs_max': {
    display: 'none',
  },
});
export const PopularSearchLabel = styled(Flex, {
  padding: '$rem$0_62',
  backgroundColor: '$gray',
  color: '$foreground',
  borderRadius: '$px$11',
  border: '$px$1 solid $lightGrayLine',
  fontSize: '$px$9',
  cursor: 'pointer',
  transition: 'all .3s ease',
  '&:hover': {
    transform: 'translateY(-$px$1)',
  },
  '@md_max': {
    justifyContent: 'center',
  },
});
export const StatCardsWrapper = styled(Flex, {
  padding: '$px$10',
  marginTop: '$px$30',
  '@sm_max': {
    display: 'none',
  },
});
