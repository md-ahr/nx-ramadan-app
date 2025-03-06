import compression from 'compression';
import cors from 'cors';
import express, { Express } from 'express';
import helmet from 'helmet';
import hpp from 'hpp';
import morgan from 'morgan';
import {
  appConfig,
  ENV_TYPE,
  HTTP_HEADERS,
  HTTP_METHODS,
  limiter,
  MAX_BODY_LIMIT,
  MORGAN_LOG_TYPE,
} from '../config';

const isProduction = appConfig.nodeEnv === ENV_TYPE.prod;

const appMiddlewares = (app: Express) => {
  app.use(helmet());
  app.use(
    cors({
      origin: process.env.CORS_ORIGIN || '*',
      methods: HTTP_METHODS,
      allowedHeaders: HTTP_HEADERS,
    })
  );
  app.use(hpp());
  app.use(limiter);

  app.use(express.json({ limit: MAX_BODY_LIMIT }));
  app.use(express.urlencoded({ extended: true }));

  app.use(compression());

  if (!isProduction) {
    app.use(morgan(MORGAN_LOG_TYPE.dev));
  } else {
    app.use(morgan(MORGAN_LOG_TYPE.combined));
  }
};

export { appMiddlewares };
