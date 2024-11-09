export const config = {
  database: {
    user: Bun.env.DB_USER,
    password: Bun.env.DB_PASSWORD,
    host: Bun.env.DB_HOST,
    port: Bun.env.DB_PORT ? parseInt(Bun.env.DB_PORT) : 5432,
    database: Bun.env.DB_DATABASE,
    maxLifetimeSeconds: Bun.env.DB_MAX_LIFETIME_SECONDS
      ? parseInt(Bun.env.DB_MAX_LIFETIME_SECONDS)
      : 60,
    max: Bun.env.DB_MAX ? parseInt(Bun.env.DB_MAX) : 10,
    idleTimeoutMillis: Bun.env.DB_IDLE_TIMEOUT_MILLIS
      ? parseInt(Bun.env.DB_IDLE_TIMEOUT_MILLIS)
      : 30000,
    connectionTimeoutMillis: Bun.env.DB_CONNECTION_TIMEOUT_MILLIS
      ? parseInt(Bun.env.DB_CONNECTION_TIMEOUT_MILLIS)
      : 2000,
  },
  server: {
    port: Bun.env.PORT ? parseInt(Bun.env.PORT) : 3000,
    host: Bun.env.HOST || '0.0.0.0',
  },
  env: Bun.env.NODE_ENV || 'development',
};
