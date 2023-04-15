const handleHttp = require('../utils/handle-http');
const { verifyToken } = require('../utils/handle-jwt');

const authMiddleware = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      handleHttp(res, 'TOKEN_NOT_FOUND');
    }

    const token = req.headers.authorization.split(' ').pop();
    const dataToken = await verifyToken(token);

    if (!dataToken.id) {
      handleHttp(res, 'ERROR_ID_TOKEN');
    }
    req.user = dataToken;

    next();
  } catch (e) {
    handleHttp(res, 'SESSION_INVALID', e);
  }
};

module.exports = { authMiddleware };
