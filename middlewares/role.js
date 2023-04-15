const handleHttp = require('../utils/handle-http');
const authRole = (roles) => (req, res, next) => {
  try {
    const { user } = req;
    const userRoles = user.role;

    const checkValueRol = roles.some((singleRol) =>
      userRoles.includes(singleRol),
    );

    if (!checkValueRol) {
      return handleHttp(res, 'ANOUTHORIZED');
    }

    next();
  } catch (e) {
    handleHttp(res, 'ERROR_PERMISSIONS', e);
  }
};

module.exports = { authRole };
