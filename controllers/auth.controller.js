const { matchedData } = require('express-validator');
const { registerUser, loginUser } = require('../services/auth.service');
const handleHttp = require('../utils/handle-http');

const postLogin = async (req, res) => {
  try {
    cleanBody = matchedData(req);
    const data = await loginUser(cleanBody);
    return res.status(200).json({ success: true, data });
  } catch (e) {
    handleHttp(res, 'ERROR_LOGIN_USER', e);
  }
};

const postRegister = async (req, res) => {
  try {
    const cleanBody = matchedData(req);
    const data = await registerUser(cleanBody);
    return res.status(200).json({ success: true, data });
  } catch (e) {
    handleHttp(res, 'ERROR_REGISTER_USER', e);
  }
};

module.exports = { postLogin, postRegister };
