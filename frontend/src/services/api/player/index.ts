import { AxiosResponse } from 'axios';
import { api } from '..';

export type InPlayer = {
  playerId: string;
  provider: string;
  avatar: string;
  nick: string;
};

export type OutPlayer = {
  id: string;
  nick: string;
  playerId: string;
  provider: string;
  avatar: string;
  createDate: Date;
  updateDate: Date;
};

export const createPlayer = async (input: InPlayer) => {
  try {
    const response = await api.post<InPlayer, AxiosResponse<OutPlayer>>(
      '/players',
      input,
    );

    return response;
  } catch (err) {
    console.log('error on create player', err);
  }
};

export type OutGetPlayer = {
  id: string;
  nick: string;
  avatar: string;
};

export const getPlayer = async (playerId: string) => {
  try {
    const response = await api.get<OutGetPlayer>(`/players/${playerId}`);

    return response;
  } catch (err) {
    console.log('error on get player by playerId', err);
  }
};

type InUpdatePlayer = { id: string; playerId: string; nick: string };

export const updatePlayer = async (input: InUpdatePlayer) => {
  try {
    const response = await api.post<InUpdatePlayer, null>(
      `/players/${input.id}`,
      input,
    );

    return response;
  } catch (err) {
    console.log('error on update player by playerId', err);
  }
};

export type OutGameHistory = {
  id: string;
  level: string;
  gameDate: Date;
  score: number;
  elapsedTime: number;
};

export const getGameHistoryPlayer = async (id: string) => {
  try {
    const response = await api.get<OutGameHistory[]>(`/players/${id}/games`);

    return response;
  } catch (err) {
    console.log('error on get player history', err);

    return { data: [] as OutGameHistory[] };
  }
};
