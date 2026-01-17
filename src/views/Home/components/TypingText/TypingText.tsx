'use client';
import { useTypingText } from '@/hooks';
import { EnhancedTypingText } from './style';
import { PROFESSIONS } from '@/constants';
import { useTranslation } from 'react-i18next';

export const TypingText = ({ activeIndex }: { activeIndex: number }) => {
  const { t } = useTranslation();

  const currentKey = PROFESSIONS[activeIndex % PROFESSIONS.length];

  const translatedWord = t(currentKey);

  const { displayText } = useTypingText({
    word: translatedWord,
    cycleMs: 5000,
  });

  return <EnhancedTypingText gradient="3">{displayText}</EnhancedTypingText>;
};
