import { ConnectionOptions } from 'typeorm';

const {
	POSTGRES_HOST,
	POSTGRES_USERNAME,
	POSTGRES_PASSWORD,
	POSTGRES_DATABASE,
	POSTGRES_PORT,
} = process.env;

console.log(process.env.POSTGRES_HOST);

const config: ConnectionOptions = {
	type: 'postgres',
	host: POSTGRES_HOST,
	port: Number(POSTGRES_PORT),
	username: POSTGRES_USERNAME,
	password: POSTGRES_PASSWORD,
	database: POSTGRES_DATABASE,
	synchronize: true,
	logging: false,
	entities: ['dist/database/entities/**/*.js'],
	migrations: ['dist/database/migrations/**/*.js'],
	subscribers: ['dist/database/subscribers/**/*.js'],
	cli: {
		entitiesDir: 'src/database/entities',
		migrationsDir: 'src/database/migrations',
		subscribersDir: 'src/database/subscribers',
	},
};

export default config;
