import { useEffect, useState } from 'react';

export const useCountUp = (
  end: string | number,
  duration: number = 2000,
): number => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    let startTime: number | null = null;
    const endVal = typeof end === 'string' ? parseInt(end, 10) : end;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = currentTime - startTime;

      const percentage = Math.min(progress / duration, 1);

      setCount(Math.floor(percentage * endVal));

      if (progress < duration) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration]);

  return count;
};
