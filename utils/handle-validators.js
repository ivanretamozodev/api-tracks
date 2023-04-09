const { validationResult } = require('express-validator');

const validateFields = (req, res, next) => {
  try {
    validationResult(req).throw();
    return next();
  } catch (e) {
    return res.status(403).json({ success: false, error: e.array() });
  }
};

module.exports = validateFields;
