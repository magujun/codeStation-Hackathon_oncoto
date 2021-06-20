import { getLevelTime } from './getLevelTime';
type DifficultyLevel = 'easy' | 'medium' | 'hard';

export const getPlayerScore = (distance: number, level: DifficultyLevel, elapseTime: number) => {

  const totalTime = getLevelTime(level);
  const percentNotUsed = totalTime <= 0 ? 0 : (100 - ((elapseTime * 1000) * 100 / totalTime)) / 100;

  const levelBonus = {
    easy: 0.3,
    medium: 0.6,
    hard: 1,
  }

  const bonus = 1 + (levelBonus[level] * percentNotUsed);

  var score = 0;

  if (distance < 0) return 0;

  // 0 a 1KM
  if (distance > 0 && distance <= 1000) score += 800;

  // between 1001 meters and 10000
  if (distance > 1000 && distance <= 10000) score += 600;

  // between 10.001 meters and 100 KM
  if (distance > 10000 && distance <= 100000) score += 400;

  // between 100.001 meters and 1000 KM
  if (distance > 100000 && distance <= 1000000) score += 200;

  // between 1.000.001 meters and 10.000 KM
  if (distance > 1000000 && distance <= 10000000) score += 100;

  // between 10.000.001 meters and 100.000 KM
  if (distance > 10000000 && distance <= 100000000) score += 50;

  // between 100.000.001 meters and 1.000.000 KM
  if (distance > 100000000 && distance <= 1000000000) score += 25;

  // between 1.000.000.001 meters and 10.000.000 KM
  if (distance > 1000000000 && distance <= 10000000000) score += 15;

  score += 3;

  score *= bonus;

  if (score > 1000) return 1000;

  return Math.floor(score);
}
