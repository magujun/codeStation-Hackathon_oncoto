import { differenceInSeconds } from 'date-fns';

export function getFormatedElapsedTime(start: Date, end: Date): string {
  const lapsedSeconds = differenceInSeconds(end, start);

  const minutes = Math.floor(lapsedSeconds / 60);
  const seconds = lapsedSeconds % 60;

  const minutesString = String(minutes).padStart(2, '0')
  const secondsString = String(seconds).padStart(2, '0')

  return `${minutesString}:${secondsString}`
}
