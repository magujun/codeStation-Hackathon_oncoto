import { api } from "../api";

type OutLocation = {
  lat: number;
  lng: number;
}

export const getRandomLocation = async () => {
  const response = await api.get<OutLocation>('/locations');

  return response;
};
