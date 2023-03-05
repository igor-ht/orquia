import express from 'express';
import cors from 'cors';
import { serverConfig } from './config';

const appServer = express();

appServer.use(
	cors({
		origin: `http://${serverConfig.host}:${serverConfig.origin}`,
	})
);

appServer.use(express.json());

appServer.use(express.urlencoded({ extended: false }));

export default appServer;
