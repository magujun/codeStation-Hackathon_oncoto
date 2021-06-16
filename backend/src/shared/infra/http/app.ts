import 'reflect-metadata';
import 'dotenv/config';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import swaggerUi from 'swagger-ui-express';
import cors from 'cors';

// Create TypeORM connection
import createConnection from '@shared/infra/typeorm';

// Dependency injection
import '@shared/container';

import { router } from './routes';
import { AppError } from '@shared/errors/AppError';
import upload from '@src/config/upload';
import swaggerFile from '@src/swagger.json';

createConnection();
const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

app.get('/', (request, response) => response.json({ message: 'oncoto?' }));

app.use('/player', express.static(`${upload.tmpFolder}/avatar`));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(
	(err: Error, request: Request, response: Response, next: NextFunction) => {
		if (err instanceof AppError) {
			return response.status(err.statusCode).json({
				message: err.message,
			});
		}
		return response.status(500).json({
			status: 'error',
			message: `Internal server error - ${err.message}`,
		});
		next();
	}
);

export { app };
