import http from 'http';
import { app } from './app.js';
import * as config from './config.js';

const server = http.createServer(app);

server.listen(config.httpPort, () => {
    console.log(`Listening on port ${config.httpPort}...`);
});
