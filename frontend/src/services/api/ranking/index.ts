import { api } from '..';

export type OutRanking = {
  position: number;
  avatar: string;
  nick: string;
  level: number;
  score: number;
};

export const getRanking = async () => {
  try {
    const response = await api.get<OutRanking[]>('/rankings');

    return response;
  } catch (err) {
    console.log('error get ranking', err);
    return { data: [] as OutRanking[], }
  }
};
