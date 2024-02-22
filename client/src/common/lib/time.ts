import { intervalToDuration } from 'date-fns';

function getFormatTime(time: number): string {
  const duration = intervalToDuration({ start: 0, end: time });
  const minutes = duration.minutes || 0;
  const seconds = duration.seconds || 0;
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

export default getFormatTime;
