import { api } from '..';

type DifficultyLevel = 'easy' | 'medium' | 'hard';

export type InGame = {
  playerId: string;
  level: DifficultyLevel;
  elapsedTime: number;
  locationOrigin: string;
  locationMarked: string;
  distance: number;
  score: number;
};


export type InPostGame = {
  player_id: string;
  level: DifficultyLevel;
  elapsedTime: number;
  locationOrigin: string;
  locationMarked: string;
  distance: number;
  score: number;
};


export const registerGame = async ({
  playerId: player_id,
  level,
  elapsedTime,
  locationOrigin,
  locationMarked,
  distance,
  score,
}: InGame) => {
  try {
    const response = await api.post<InPostGame>('/games', {
      player_id,
      level,
      elapsedTime,
      locationOrigin,
      locationMarked,
      distance,
      score,
    });

    return response;
  } catch (err) {
    console.log('error on register game', err);
  }
};
