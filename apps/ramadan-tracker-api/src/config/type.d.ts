type AppConfig = {
  port: string | number;
  nodeEnv: string;
};

type DbConfig = {
  host: string;
  user: string;
  password: string;
  database: string;
  waitForConnections: boolean;
  connectionLimit: number;
  queueLimit: number;
};

export type { AppConfig, DbConfig };
