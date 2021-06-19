import { api } from '../api';

export const registerGame = async () => {
  const response = await api.post('/games');

  return response;
}
