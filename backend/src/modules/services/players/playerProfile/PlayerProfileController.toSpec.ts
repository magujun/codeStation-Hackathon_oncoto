import { hash } from 'bcryptjs';
import request from 'supertest';
import { Connection } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

import { app } from '@shared/infra/http/app';
import createConnection from '@shared/infra/typeorm';

let connection: Connection;

describe('Return a player profile', () => {
	beforeAll(async () => {
		connection = await createConnection();
		await connection.runMigrations();
		const id = uuidV4();
		await connection.query(
			`INSERT INTO PLAYERS(id, playerId, provider) values('${id}', 'testPlayer', 'testProvider')`
		);
	});

	afterAll(async () => {
		await connection.dropDatabase();
		await connection.close();
	});

	it('Should be able to return a player profile', async () => {
		const response = await request(app).get(`/players/'testPlayer'`);
		expect(response.status).toBe(200);
		expect(response.body.length).toBe(1);
		expect(response.body[0]).toHaveProperty('id');
		expect(response.body[0].provider).toEqual('testProvider');
	});
});
