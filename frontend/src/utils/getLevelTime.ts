type DifficultyLevel = 'easy' | 'medium' | 'hard';

export const getLevelTime = (level: DifficultyLevel) => {
  const levelTime = {
    easy: 1000 * 60 * 5, // 5 minutos
    medium: 1000 * 60 * 3, // 3 minutos
    hard: 1000 * 60 * 1, // 1 minutos
  };

  return levelTime[level];
}
