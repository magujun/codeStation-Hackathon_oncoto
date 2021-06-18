export class AppResponse {
	public readonly message: string;
	public readonly statusCode: number;

	constructor(message: string, statusCode = 200) {
		this.message = message;
		this.statusCode = statusCode;
	}
}
