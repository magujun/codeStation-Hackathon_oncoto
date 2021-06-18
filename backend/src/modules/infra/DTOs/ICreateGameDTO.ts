interface ICreateGameDTO {
	id?: string;
  level: string;
  elapsedTime: number;
  locationOrigin: string;
  locationMarked: string;
  distance: number;
  score: number;
  playerId: string;
}
export { ICreateGameDTO };
