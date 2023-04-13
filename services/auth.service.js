const { encrypt, compare } = require('../utils/handle-password');
const { usersModel } = require('../models');
const { tokenSign } = require('../utils/handle-jwt');

const loginUser = async (data) => {
  const { email, password } = data;
  const user = await usersModel.findOne({ email });
  if (!user) {
    throw new Error('User Not Found');
  }

  const passwordHash = user.password;
  const check = await compare(password, passwordHash);

  if (!check) {
    throw new Error('Password Invalid');
  }

  const dataUser = {
    token: await tokenSign(user),
    user,
  };

  return dataUser;
};

const registerUser = async (data) => {
  const password = await encrypt(data.password);
  const body = { ...data, password };
  const user = await usersModel.create(body);

  const dataUser = {
    token: await tokenSign(user),
    user,
  };

  return dataUser;
};

module.exports = { loginUser, registerUser };
