import dotenv from 'dotenv';

dotenv.config();

const host = process.env.APP_SV_HOST as string;
const port = +(process.env.APP_SV_PORT as string) as number;
const origin = +(process.env.APP_SV_ORIGIN as string) as number;

const endpoint = `http://${host}:${port}`;

export const serverConfig = { host, port, origin, endpoint };

export const DBconfig = {
	dbhost: process.env.APP_DB_HOST as string,
	database: process.env.APP_DB_DB as string,
	user: process.env.APP_DB_USER as string,
	password: process.env.APP_DB_PASS as string,
};
