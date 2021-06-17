import { Request, Response, NextFunction } from 'express';
import { compare } from 'bcryptjs';
import { AppError } from '@shared/errors/AppError';
import auth from '@src/config/auth';

interface IPayload {
	auth_key: string;
}

export async function authenticate(
	request: Request,
	response: Response,
	next: NextFunction
): Promise<void> {
	const { auth_key } = request.body as IPayload;
	if (!auth_key) {
		throw new AppError('Invalid request!', 401);
	}
	const authenticated = await compare(auth_key, auth.key);
	if (!authenticated) {
		throw new AppError('Invalid request!', 401);
	}
	next();
}
