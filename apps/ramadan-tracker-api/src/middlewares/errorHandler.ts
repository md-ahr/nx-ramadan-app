import { Request, Response } from 'express';
import { appConfig, HTTP_STATUS } from '../config';
import { sendError } from '../utils';

const isProduction = appConfig.nodeEnv === 'production';

// 404 handler
const notFound = (req: Request, res: Response) => {
  sendError(
    res,
    HTTP_STATUS.NOT_FOUND,
    `Requested route "${req.path}" not found.`
  );
};

// Global error handler
const errorHandler = (err: Error, req: Request, res: Response) => {
  sendError(
    res,
    HTTP_STATUS.INTERNAL_SERVER_ERROR,
    isProduction ? 'Internal Server Error' : err.message,
    !isProduction ? err.stack : null
  );
};

export { errorHandler, notFound };
