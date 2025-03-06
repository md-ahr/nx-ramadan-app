import { Request, Response } from 'express';
import { checkDatabaseConnection, HTTP_STATUS } from '../config';
import { checkServer } from '../utils';

const healthCheck = async (req: Request, res: Response) => {
  const serverStatus = checkServer();
  const dbStatus = await checkDatabaseConnection();

  res.status(HTTP_STATUS.OK).json({
    success: true,
    server: 'up',
    database: dbStatus ? 'up' : 'down',
    uptime: serverStatus.uptime,
    timestamp: serverStatus.timestamp,
  });
};

export { healthCheck };
