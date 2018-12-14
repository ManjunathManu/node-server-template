import {
  body,
} from 'express-validator/check';
import {
  matchedData,
} from 'express-validator/filter';
import jwt from 'jsonwebtoken';

import CONFIG from '../config';

export const preLogin = [
  body('email', 'required').not().isEmpty().isEmail().withMessage('invalid email format').normalizeEmail(),
  body('password', 'required').not().isEmpty().isLength({
    min: 4,
  }).withMessage('Password must be minimum of 4 characters long').escape(),
];

export const login = async (req, res, next) => {
  const {
    email,
    // password,
  } = matchedData(req, {
    locations: ['body'],
  });
  const payload = {
    userData: {
      email,
    },
  };
  const token = jwt.sign(payload, CONFIG.JWT_SECRET_PASS, {
    expiresIn: '1h',
  });
  res.send({
    message: 'Logged in successfully',
    token,
  });
};
