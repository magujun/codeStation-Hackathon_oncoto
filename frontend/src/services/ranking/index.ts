import { api } from '../api';

export type OutRanking = {
  position: number;
  avatar: string;
  nick: string;
  level: number;
  score: number;
}

export const getRanking = async () => {

  const response = await api.get<OutRanking[]>('/ranking');

  return response;
}
