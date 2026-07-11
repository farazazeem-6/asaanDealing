'use client';
import { useEffect, useRef, useState } from 'react';

type TTypingHookOptions = {
  word: string; 
  cycleMs?: number;
};

export const useTypingText = (options: TTypingHookOptions) => {
  const { word = '', cycleMs = 5000 } = options;

  const [displayText, setDisplayText] = useState('');

  const typeTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const holdTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const deleteTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    // Cleanup any previous timers
    if (typeTimerRef.current) clearInterval(typeTimerRef.current);
    if (holdTimerRef.current) clearTimeout(holdTimerRef.current);
    if (deleteTimerRef.current) clearInterval(deleteTimerRef.current);

    // Ratios inside one cycle: type 40%, hold 20%, delete 40%
    const typeMs = Math.round(cycleMs * 0.4);
    const holdMs = Math.round(cycleMs * 0.2);
    const deleteMs = cycleMs - typeMs - holdMs;

    setDisplayText('');

    const totalChars = word.length;
    const typeStepMs = totalChars > 0 ? typeMs / totalChars : typeMs;
    let typedCount = 0;

    if (totalChars === 0) return;

    typeTimerRef.current = setInterval(() => {
      typedCount += 1;
      setDisplayText(word.slice(0, typedCount));

      if (typedCount >= totalChars) {
        if (typeTimerRef.current) clearInterval(typeTimerRef.current);

        holdTimerRef.current = setTimeout(() => {
          let remaining = totalChars;
          const deleteStepMs = totalChars > 0 ? deleteMs / totalChars : deleteMs;
          
          deleteTimerRef.current = setInterval(() => {
            remaining -= 1;
            setDisplayText(word.slice(0, remaining));

            if (remaining <= 0) {
              if (deleteTimerRef.current) clearInterval(deleteTimerRef.current);
            }
          }, deleteStepMs);
        }, holdMs);
      }
    }, typeStepMs);

    return () => {
      if (typeTimerRef.current) clearInterval(typeTimerRef.current);
      if (holdTimerRef.current) clearTimeout(holdTimerRef.current);
      if (deleteTimerRef.current) clearInterval(deleteTimerRef.current);
    };
  }, [word, cycleMs]);

  return { displayText };
};