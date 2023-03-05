import appServer from './server';
import { serverConfig } from './config';

async function startApp() {
	appServer.listen(serverConfig.port, serverConfig.host, () => {
		console.log(`** Server ON > ${serverConfig.endpoint} **`);
	});
}

startApp().catch((err) => console.log(err));
