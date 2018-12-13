import createError from 'http-errors';
// import debug from 'debug';
import {
  // eslint-disable-next-line import/named
  createServer,
  // eslint-disable-next-line import/named
  httpServer,
} from './common-utils';

import CONFIG from './config';
import logger from './logger';
import router from './controller';

const a = require('debug')('aaaa');

a('sfgagagwr');
// console.log(a);

const app = createServer({
  stream: logger.access,
});

a('sss');
app.use(router);

app.use((req, res, next) => {
  next(createError(404, {
    error: 'Not Found',
  }, {
    expose: false,
  }));
});

app.use((error, req, res, next) => {
  logger.debug(req.id)(error);
  if (res.headersSent) return;
  const {
    expose = CONFIG.DEBUG_ERRORS,
    stack,
    detail,
    ...response
  } = error;
  res.status(error.status || 500).json(expose ? ({
    stack,
    detail,
    ...response,
  }) : response);
});

const server = httpServer(app, CONFIG.PORT);

server.listen(CONFIG.PORT);
