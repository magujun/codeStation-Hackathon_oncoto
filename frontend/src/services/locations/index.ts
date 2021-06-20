import { api } from '../api';

type OutLocation = {
  coordinates: string;
};

export const getRandomLocation = async () => {
  try {
    const response = await api.get<OutLocation>('/locations');

    return response;
  } catch (err) {
    console.log('error get random location', err);
  }
};
