interface ICreateGameDTO {
	id?: string;
	player_id: string;
	level: string;
	elapsedTime: number;
	locationOrigin: string;
	locationMarked: string;
	distance: number;
	score: number;
}
export { ICreateGameDTO };
