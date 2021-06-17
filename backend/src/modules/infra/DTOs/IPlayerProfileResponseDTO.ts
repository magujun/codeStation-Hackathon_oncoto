interface IPlayerProfileResponseDTO {
	id: string;
	playerId: string;
	nick: string;
	avatar: string;
	avatar_url(): string;
}

export { IPlayerProfileResponseDTO };
