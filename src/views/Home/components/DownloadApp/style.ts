import { Box, Flex, HtmlImage, Text } from '@/components/elements';
import { styled } from '@/theme';

export const ComingSoonSection = styled(Flex, {
  padding: '$rem$2 $rem$6_25',
});
export const ContentSection = styled(Flex, {
  flexDirection: 'column !important',
  backgroundColor:'$slate3'
});
export const ContentHeading = styled(Text, {});
export const ContentSubHeading = styled(Text, {});
export const IllustrationSection = styled(Box, {});
export const IllustrationImg = styled(HtmlImage, {
  border: '1px solid black',
});
