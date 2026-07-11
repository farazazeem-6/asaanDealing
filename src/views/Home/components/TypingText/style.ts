import { Text } from '@/components/elements';
import { blink, styled } from '@/theme';

export const EnhancedTypingText = styled(Text, {
  fontWeight: '$fontWeight$semibold',
  borderRight: '$px$3 solid $green',
  paddingRight: '$px$3',
  animation: `${blink} 1s step-end infinite`,
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  wordBreak: 'break-word',
});
