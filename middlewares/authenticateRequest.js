import createError from 'http-errors';
import {
  verify,
} from 'jsonwebtoken';

import CONFIG from '../config';
import logger from '../logger';

const verifyJwt = (token, req) => new Promise((resolve) => {
  verify(token, CONFIG.JWT_SECRET_PASS, (error, data) => {
    if (error) return resolve([error, {}]);
    const {
      userData: {
        email,
      } = {},
    } = data || {};
    return resolve([null, {
      email,
    }]);
  });
});

export const authenticateRequest = async (req, res, next) => {
  const authHeader = req.get('Authorization');
  const jwtToken = authHeader && authHeader.split(' ')[1];
  if (!jwtToken) {
    return next(createError(
      401,
      'Authentication details missing', {
        expose: false,
      },
    ));
  }
  const [error, {
    email,
  } = {}] = await verifyJwt(jwtToken, req);
  if (error || !email) {
    logger.debug(req.id)(error || 'No email Information found');
    return next(createError(
      500,
      'Error Authenticating', {
        expose: false,
      },
    ));
  }
  req.user = {
    email,
  };
  return next();
};
