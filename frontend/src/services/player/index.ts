import { AxiosResponse } from 'axios';
import { api } from '../api';

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
  const response = await api.post<InPlayer, AxiosResponse<OutPlayer>>('/players', input);

  return response;
};


export type OutGetPlayer = {
  id: string;
  nick: string;
  avatar: string;
};


export const getPlayer = async (playerId: string) => {
  const response = await api.get<OutGetPlayer>(`/players/${playerId}`);

  return response;
};

type InUpdatePlayer = { id: string; playerId: string; nick: string };

export const updatePlayer = async (input: InUpdatePlayer) => {
  const response = await api.post<InUpdatePlayer, null>(`/players/${input.id}`, input);

  return response;
};

export type OutGameHistory = {
  id: number;
  date: Date;
  time: string;
  level: string;
  score: number;
}

// TODO: tipar o retorno
export const getGameHistoryPlayer = async (id: string) => {
  const response = await api.get<OutGameHistory[]>(`/players/${id}/pastgames`);

  return response;
};
