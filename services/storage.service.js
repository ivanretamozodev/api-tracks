const { storageModel } = require('../models');
const PUBLIC_URL = process.env.PUBLIC_URL;
const createImage = async (fileData) => {
  const { filename } = fileData;
  const fileStorage = {
    filename,
    url: `${PUBLIC_URL}/${filename}`,
  };

  const data = storageModel.create(fileStorage);
  return data;
};

module.exports = createImage;
