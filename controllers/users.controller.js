const { handleHttp } = require('../utils/handle-http');

const getItems = async (req, res) => {
  try {
  } catch (e) {
    handleHttp(res, 'ERROR_GET_ITEMS', e);
  }
};
const getItem = async (req, res) => {
  try {
  } catch (e) {
    handleHttp(res, 'ERROR_GET_ITEM', e);
  }
};
const postItem = async (req, res) => {
  try {
  } catch (e) {
    handleHttp(res, 'ERROR_CREATE_ITEM', e);
  }
};
const updateItem = async (req, res) => {
  try {
  } catch (e) {
    handleHttp(res, 'ERROR_UPDATE_ITEM', e);
  }
};
const deleteItem = async (req, res) => {
  try {
  } catch (e) {
    handleHttp(res, 'ERROR_DELETE_ITEM', e);
  }
};
1;
module.exports = { getItems, getItem, postItem, updateItem, deleteItem };
