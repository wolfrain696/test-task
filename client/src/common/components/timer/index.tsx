import { useEffect, useState } from 'react';
import getFormatTime from '../../lib/time';

interface Props {
  finishTime: number
}
function Timer({ finishTime }: Props) {
  const [timeLeft, setTimeLeft] = useState<number>(
    Math.max(finishTime - Date.now(), 0),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const updatedTimeLeft = finishTime - Date.now();

      if (updatedTimeLeft <= 0) {
        clearInterval(interval);
        setTimeLeft(0);
      } else {
        setTimeLeft(updatedTimeLeft);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [finishTime]);

  return <span>{getFormatTime(timeLeft)}</span>;
}

export default Timer;
