import { Pool } from "pg";

/** DB env variables */
const dbName = process.env.DB_NAME || ("postgress" as string);
const dbUser = process.env.DB_USER as string;
const dbHost = process.env.DB_HOST as string;
const dbPort = process.env.DB_PORT as unknown as number;
const dbPass = process.env.DB_PASS as string;

const db = new Pool({
  user: dbUser,
  host: dbHost,
  database: dbName,
  password: dbPass,
  port: dbPort,
  ssl: {
    rejectUnauthorized: false,
  },
});

export default db;
