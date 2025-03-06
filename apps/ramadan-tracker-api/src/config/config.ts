import { config } from 'dotenv';
import rateLimit from 'express-rate-limit';
import {
  DEFAULT_DB_CONNECTION_LIMIT,
  DEFAULT_DB_QUERY_LIMIT,
  DEFAULT_ENV,
  DEFAULT_PORT,
  MAX_LIMIT_TIME,
  MAX_RATE_LIMIT,
} from './constants';
import type { AppConfig, DbConfig } from './type';

config();

const appConfig: AppConfig = {
  port: process.env.PORT || DEFAULT_PORT,
  nodeEnv: process.env.NODE_ENV || DEFAULT_ENV,
};

const dbConfig: DbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit:
    Number(process.env.DB_CONNECTION_LIMIT) || DEFAULT_DB_CONNECTION_LIMIT,
  queueLimit: Number(process.env.DB_QUERY_LIMIT) || DEFAULT_DB_QUERY_LIMIT,
};

const limiter = rateLimit({
  windowMs: MAX_LIMIT_TIME,
  max: MAX_RATE_LIMIT,
  message: 'Too many requests from this IP, please try again later.',
});

export { appConfig, dbConfig, limiter };
