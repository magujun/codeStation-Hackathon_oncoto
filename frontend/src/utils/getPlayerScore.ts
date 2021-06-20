import { getLevelTime } from './getLevelTime';
type DifficultyLevel = 'easy' | 'medium' | 'hard';

export const getPlayerScore = (
  distance: number,
  level: DifficultyLevel,
  elapseTime: number,
) => {
  const totalTime = getLevelTime(level);
  const distanceInKm = distance / 1000;
  const percentNotUsed =
    totalTime <= 0 ? 0 : (100 - (elapseTime * 1000 * 100) / totalTime) / 100;

  const levelBonus = {
    easy: 0.3,
    medium: 0.6,
    hard: 1,
  };

  const bonus = 1 + levelBonus[level] * percentNotUsed;

  var score = 0;

  if (distance < 0) return 0;

  console.log('get player score', distanceInKm);

  if (distance <= 100) {
    score = 1000;
  } else if (distanceInKm <= 1) {
    score = 900;
  } else if (distanceInKm <= 10) {
    score = 850;
  } else if (distanceInKm <= 100) {
    score = 700;
  } else if (distanceInKm <= 500) {
    score = 500;
  } else if (distanceInKm > 1000) {
    score = 100;
  }


  const finalScore = Math.floor(score * bonus);

  if (isNaN(finalScore)) return 0;

  if (finalScore > 1000) return 1000;

  return finalScore;
};
