import { api } from '../api';

type OutRanking = {
  position: number;
  avatar: string;
  nick: string;
  score: number;
}

export const getRanking = async () => {
  const response = await api.get<OutRanking[]>('/ranking');

  return response;
}
