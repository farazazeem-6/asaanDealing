import { useTypingText } from '@/hooks';
import { EnhancedTypingText } from './style';

export const TypingText = ({ activeIndex }: { activeIndex: number }) => {
  const { displayText } = useTypingText({ activeIndex, cycleMs: 5000 });
  return <EnhancedTypingText gradient="3">{displayText}</EnhancedTypingText>;
};
