import { useEffect, useState } from 'react';

const useProgress = (maxTimeInSeconds: number = 900): number => {
  const [progress, setProgress] = useState<number>(0);
  const [elapsedTime, setElapsedTime] = useState<number>(0);

  useEffect(() => {
    const intervalId: number = setInterval(() => {
      if (progress < 1) {
        setElapsedTime((prev) => prev + 1);
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    setProgress(elapsedTime / maxTimeInSeconds);
  }, [elapsedTime]);

  return Math.floor(progress * 1000);
};
export default useProgress;
