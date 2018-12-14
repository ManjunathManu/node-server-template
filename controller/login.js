import {
  body,
} from 'express-validator/check';

export const preLogin = [
  body('email', 'required').not().isEmpty().isEmail().withMessage('invalid email format').normalizeEmail(),
  body('password', 'required').not().isEmpty().isLength({
    min: 4,
  }).withMessage('Password must be minimum of 4 characters long').escape(),
];

export const login = async (req, res, next) => {
  res.send({
    message: 'Logged in successfully',
  });
};
