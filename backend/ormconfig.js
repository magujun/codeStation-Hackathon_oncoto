module.exports = {
	type: 'postgres',
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	username: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	synchronize: false,
	logging: false,
	entities: ['./src/modules/**/entities/*.ts'],
	migrations: ['./src/shared/infra/typeorm/migrations/*.ts'],
	cli: {
		migrationsDir: './src/shared/infra/typeorm/migrations',
	},
};
