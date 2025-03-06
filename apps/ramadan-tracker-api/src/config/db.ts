import mysql, { PoolConnection } from 'mysql2/promise';
import { dbConfig } from './config';

const pool = mysql.createPool(dbConfig);

const executeQuery = async <T>(sql: string, params?: unknown): Promise<T> => {
  const connection = await pool.getConnection();
  try {
    const [results] = await connection.execute(sql, params);
    return results as T;
  } finally {
    connection.release();
  }
};

const getConnection = async (): Promise<PoolConnection> => {
  return await pool.getConnection();
};

const executeTransaction = async (
  callback: (connection: PoolConnection) => Promise<void>
): Promise<void> => {
  const connection = await pool.getConnection();
  await connection.beginTransaction();

  try {
    await callback(connection);
    await connection.commit();
  } catch (err) {
    await connection.rollback();
    throw err;
  } finally {
    connection.release();
  }
};

const checkDatabaseConnection = async (): Promise<boolean> => {
  try {
    const connection = await pool.getConnection();
    connection.release();
    return true;
  } catch (error) {
    console.error('Database connection failed:', error);
    return false;
  }
};

export {
  checkDatabaseConnection,
  executeQuery,
  executeTransaction,
  getConnection,
  pool,
};
