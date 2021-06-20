import { getLevelTime } from './getLevelTime';
type DifficultyLevel = 'easy' | 'medium' | 'hard';

export const getPlayerScore = (distance: number, level: DifficultyLevel, elapseTime: number) => {

  const totalTime = getLevelTime(level);
  const distanceInKm = distance / 1000;
  const percentNotUsed = totalTime <= 0 ? 0 : (100 - ((elapseTime * 1000) * 100 / totalTime)) / 100;

  const levelBonus = {
    easy: 0.3,
    medium: 0.6,
    hard: 1,
  }

  const bonus = 1 + (levelBonus[level] * percentNotUsed);

  var score = 0;

  if (distance < 0) return 0;

  console.log('get player score', distanceInKm);

  if (distanceInKm >= 0 && distanceInKm <= 10) score += 800;

  if (distanceInKm > 10 && distanceInKm <= 100) score += 600;

  if (distanceInKm > 100 && distanceInKm <= 400) score += 500;

  if (distanceInKm > 400 && distanceInKm <= 800) score += 400;

  if (distanceInKm > 800 && distanceInKm <= 1000) score += 300;

  if (distanceInKm > 1000 && distanceInKm <= 10000) score += 200;

  if (distanceInKm > 10000 && distanceInKm <= 10000000) score += 25;

  if (distanceInKm > 10000000 && distanceInKm <= 100000000) score += 15;

  score += 3;

  score *= bonus;

  if (isNaN(Math.floor(score))) return 50;

  if (score > 1000) return 1000;

  return Math.floor(score);
}
