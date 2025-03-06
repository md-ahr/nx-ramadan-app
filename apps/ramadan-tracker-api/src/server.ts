import express from 'express';
import { appConfig, checkDatabaseConnection } from './config';

const app = express();

const startServer = async () => {
  try {
    const dbStatus = await checkDatabaseConnection();

    if (!dbStatus) {
      console.error('❌ Database connection failed');
      process.exit(1);
    }

    const server = app.listen(appConfig.port, () => {
      console.log(`🚀 Server is running in ${appConfig.nodeEnv} mode`);
      console.log(`🔌 Listening at http://localhost:${appConfig.port}`);
      console.log('📦 Database connection established');
    });

    server.on('error', (error: Error) => {
      console.error('Server error:', error);
      process.exit(1);
    });

    const shutdown = async () => {
      console.log('SIGTERM signal received. Closing HTTP server...');
      await new Promise<void>((resolve) => {
        server.close(() => resolve());
      });
      process.exit(0);
    };

    process.on('SIGTERM', shutdown);
    process.on('SIGINT', shutdown);

    return server;
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

export { app, startServer };
