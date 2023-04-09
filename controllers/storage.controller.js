const handleHttp = require('../utils/handle-http');
const createImage = require('../services/storage.service');

const postItem = async (req, res) => {
  try {
    const { file } = req;
    const data = await createImage(file);
    return res.status(200).json({ success: true, data });
  } catch (e) {
    handleHttp(res, 'ERROR_CREATE_ITEM', e);
  }
};

module.exports = { postItem };
