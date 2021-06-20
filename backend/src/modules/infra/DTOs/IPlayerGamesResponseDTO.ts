interface IPlayerGamesResponseDTO {
	id: string;
	player_id: string;
	level: string;
	score: number;
	elapsedTime: number;
	gameDate: Date;
}

export { IPlayerGamesResponseDTO };
