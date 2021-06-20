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

  // 0 a 1KM
  if (distanceInKm > 0 && distanceInKm <= 1) score += 800;

  // between +1KM meters and 10KM
  if (distanceInKm > 1 && distanceInKm <= 10) score += 600;

  // between +10KM meters and 100 KM
  if (distanceInKm > 10 && distanceInKm <= 100) score += 400;

  // between +100KM meters and 1000 KM
  if (distanceInKm > 100 && distanceInKm <= 1000) score += 200;

  // between +1.000KM meters and 10.000 KM
  if (distanceInKm > 1000 && distanceInKm <= 10000) score += 100;

  // between 10.000 KM meters and 100.000 KM
  if (distanceInKm > 10000 && distanceInKm <= 100000) score += 50;

  // between +100.000 KM meters and 1.000.000 KM
  if (distanceInKm > 100000 && distanceInKm <= 1000000) score += 25;

  // between +1.000.000 KM meters and 10.000.000 KM
  if (distanceInKm > 1000000 && distanceInKm <= 10000000) score += 15;

  score += 3;

  score *= bonus;

  if (isNaN(Math.floor(score))) return 50;

  if (score > 1000) return 1000;

  return Math.floor(score);
}
