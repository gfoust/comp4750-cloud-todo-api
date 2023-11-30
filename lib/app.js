import express from 'express';
import morgan from 'morgan';

import * as config from './config.js';
import * as common from './app/common.js';
import * as api from './app/api/router.js';

export const app = express();

// Logging
if (config.logLevel) {
    app.use(morgan(config.logLevel));
}

// Features
app.use('/items', api.router);

// Static files
app.use(express.static('./static'));

app.use(common.notFound);
app.use(common.internalError);
