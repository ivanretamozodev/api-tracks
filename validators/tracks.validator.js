const { check } = require('express-validator');
const validateFields = require('../utils/handle-validators');

const validatorCreateTrack = [
  check('name').exists().notEmpty().notEmpty(),
  check('album').exists().notEmpty().notEmpty(),
  check('artist').exists().notEmpty().notEmpty(),
  check('artist.name').exists().notEmpty().notEmpty(),
  check('artist.nickname').exists().notEmpty().notEmpty(),
  check('artist.nationality').exists().notEmpty().notEmpty(),
  check('duration').exists().notEmpty().notEmpty(),
  check('duration.start').exists().notEmpty().notEmpty(),
  check('duration.end').exists().notEmpty().notEmpty(),
  check('mediaId').exists().notEmpty().notEmpty().isMongoId(),
  (req, res, next) => validateFields(req, res, next),
];

const validatorGetTrack = [
  check('id').exists().notEmpty().isMongoId(),
  (req, res, next) => validateFields(req, res, next),
];
module.exports = { validatorCreateTrack, validatorGetTrack };
