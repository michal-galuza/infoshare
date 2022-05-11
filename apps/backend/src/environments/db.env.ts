export interface IDbConfig {
  password: string;
  host: string;
  port: string;
  username: string;
  database: string;
}

export default (): IDbConfig => ({
  password: process.env.DB_PASSWORD || '',
  username: process.env.DB_USERNAME || '',
  host: process.env.DB_HOST || '',
  port: process.env.DB_PORT || '',
  database: process.env.DB_DATABASE || '',
});
