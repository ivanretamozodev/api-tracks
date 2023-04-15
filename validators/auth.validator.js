const { check } = require('express-validator');
const validateFields = require('../utils/handle-validators');
const { emailAlreadyUsed } = require('./db.validator');

const loginValidator = [
  check('password').exists().notEmpty().isLength({ min: 3, max: 15 }),
  check('email').exists().notEmpty().isEmail(),
  (req, res, next) => validateFields(req, res, next),
];
const registerValidator = [
  check('name').exists().notEmpty().isLength({ min: 3, max: 30 }),
  check('age').exists().notEmpty().isNumeric(),
  check('password').exists().notEmpty().isLength({ min: 3, max: 80 }),
  check('email').exists().notEmpty().isEmail(),
  check('email').custom(emailAlreadyUsed),
  (req, res, next) => validateFields(req, res, next),
];

module.exports = { loginValidator, registerValidator };
