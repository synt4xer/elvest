import { Pool } from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';
import { config } from '../config';

const pool = new Pool({
  user: config.database.user,
  password: config.database.password,
  host: config.database.host,
  port: config.database.port,
  database: config.database.database,
  maxLifetimeSeconds: config.database.maxLifetimeSeconds,
  max: config.database.max,
  idleTimeoutMillis: config.database.idleTimeoutMillis,
  connectionTimeoutMillis: config.database.connectionTimeoutMillis,
  ssl: config.env === 'production',
  log: (...messages) => console.info(`[DB] ${messages.join(' ')}`),
});

export const db = drizzle({ client: pool, casing: 'snake_case' });
