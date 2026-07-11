import { Flex, HtmlImage, NextImage, Text } from '@/components/elements';
import { styled } from '@/theme';

export const ComingSoonSection = styled(Flex, {
  padding: '$rem$2 $rem$6',
  '@lg_max': {
    padding: '$rem$2_5 $rem$5',
  },
  '@md_max': {
    padding: '$rem$3 $rem$4',
  },
  '@sm_max': {
    padding: '$rem$2 $rem$2',
  },
  '@xs_max': {
    padding: '$rem$2 $rem$1',
  },
});
export const ContentSection = styled(Flex, {
  backgroundColor: '$slate3',
  padding: '$px$10 $px$50',
  width: '$percent$100',
  borderRadius: '$px$10',
  height: '$px$300 !important',
  alignItems: 'center !important',
  overflow: 'hidden',
  justifyContent: 'space-between !important',
  '@lg_max': {
    padding: '$px$10 $px$40',
    height: '$px$250 !important',
  },
  '@md_max': {
    padding: '$px$10 $px$30',
    height: '$px$180 !important',
  },
  '@sm_max': {
    padding: '$px$10 $px$20',
    height: '$px$130 !important',
    borderRadius: '$px$10',
  },
  '@xs_max': {
    padding: '$px$5 $px$10',
    height: '$px$120 !important',
  },
});
export const TextContent = styled(Flex, {
  flexDirection: 'column !important',
  gap: '$px$10',
  '@md_max': {
    gap: '$px$4',
  },
});
export const ContentHeading = styled(Text, {
  fontSize: '$rem$3',
  fontWeight: '$fontWeight$bold',
  color: '$dGreen !important',
  fontFamily: 'Limelight',
  '@lg_max': {
    fontSize: '$rem$2',
  },
  '@sm_max': {
    fontSize: '$rem$1_62',
  },
});
export const ButtonImg = styled(NextImage, {
  width: '$px$120',
  height: '$px$50',
  '@lg_max': {
    width: '$px$110',
  },
  '@md_max': {
    width: '$px$100',
  },
  '@sm_max': {
    width: '$px$90',
    height: '$px$30',
  },
  '@xs_max': {
    width: '$px$60',
    height: '$px$25',
  },
});
export const ContentSubHeading = styled(Text, {
  fontSize: '$rem$1',
  fontWeight: '$fontWeight$normal',
  color: '$secondryHeading',
  '@md_max': {
    fontSize: '$px$10',
  },
  '@sm_max': {
    fontSize: '$px$10',
  },
  '@xs_max': {
    fontSize: '$px$8',
  },
});
export const DownloadButtons = styled(Flex, {
  gap: '$px$10',
  marginTop: '$px$20',
  '@md_max': {
    marginTop: '$px$15',
  },
  '@sm_max': {
    marginTop: '$px$10',
    gap: '$px$5',
  },
  '@xs_max': {
    marginTop: '$px$1',
    gap: '$px$3',
  },
});
export const IllustrationImg = styled(HtmlImage, {
  width: '$px$450 !important',
  height: '$px$430 !important',
  flexShrink: 0,
  '@lg_max': {
    width: '$px$350 !important',
  },
  '@md_max': {
    width: '$px$270 !important',
    height: '$px$300 !important',
  },
  '@sm_max': {
    width: '$px$200 !important',
  },
  '@xs_max': {
    width: '$px$170 !important',
  },
});
