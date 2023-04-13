const express = require('express');
const {
  registerValidator,
  loginValidator,
} = require('../validators/auth.validator');
const { postLogin, postRegister } = require('../controllers/auth.controller');
const router = express.Router();

router.post('/login', loginValidator, postLogin);
router.post('/register', registerValidator, postRegister);

module.exports = router;
