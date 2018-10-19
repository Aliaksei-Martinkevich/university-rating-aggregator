import 'reflect-metadata';
import { load } from 'dotenv';

import { createConnection } from 'typeorm';

load();

import('./database/ormconfig')
	.then(ormconfig => ormconfig.default)
	.then(createConnection)
	.catch(console.error);
