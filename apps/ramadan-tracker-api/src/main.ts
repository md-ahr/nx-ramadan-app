import { errorHandler, notFound } from './middlewares';
import { appMiddlewares } from './middlewares/appMiddlewares';
import healthRoute from './routes/health.route';
import { app, startServer } from './server';

// Global middlewares
appMiddlewares(app);

// Health route
app.use('/api', healthRoute);

// 404 handler
app.use(notFound);

// Global error handler
app.use(errorHandler);

(async () => {
  await startServer();
})().catch((error) => {
  console.error('Failed to start server:', error);
  process.exit(1);
});

export default app;
