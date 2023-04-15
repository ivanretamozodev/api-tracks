const { usersModel } = require('../models');

const emailAlreadyUsed = async (email) => {
  const user = await usersModel.findOne({ email });
  if (user) {
    throw new Error('Email Already Used');
  }
};

module.exports = { emailAlreadyUsed };
