import { Request, Response, NextFunction } from 'express';
import { compare } from 'bcryptjs';
import { AppError } from '@shared/errors/AppError';
import auth from '@src/config/auth';

export async function authenticate(
	request: Request,
	response: Response,
	next: NextFunction
): Promise<void> {
	const authorization = request.headers.authorization;
	if (!authorization) {
		throw new AppError('Invalid request!', 401);
	}
	const authenticated = await compare(authorization, auth.key);
	if (!authenticated) {
		throw new AppError('Invalid request!', 401);
	}
	next();
}
