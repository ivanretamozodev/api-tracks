const {
  getTracks,
  createTrack,
  getTrack,
  updateTrack,
  deleteTrack,
} = require('../services/tracks.service');
const { matchedData } = require('express-validator');
const { handleHttp } = require('../utils/handle-http');

const getItems = async (req, res) => {
  try {
    const data = await getTracks();
    return res.status(200).json({ success: true, tracks: data });
  } catch (e) {
    handleHttp(res, 'ERROR_GET_ITEMS', e);
  }
};
const getItem = async (req, res) => {
  try {
    const { id } = matchedData(req);
    const data = await getTrack(id);
    return res.status(200).json({ success: true, track: data });
  } catch (e) {
    handleHttp(res, 'ERROR_GET_ITEM', e);
  }
};
const postItem = async (req, res) => {
  try {
    const body = matchedData(req);
    const data = await createTrack(body);
    return res.status(201).json({ success: true, track: data });
  } catch (e) {
    handleHttp(res, 'ERROR_CREATE_ITEM', e);
  }
};
const updateItem = async (req, res) => {
  try {
    const { id, ...body } = matchedData(req);
    const data = await updateTrack(id, body);
    return res.status(201).json({ success: true, track: data });
  } catch (e) {
    handleHttp(res, 'ERROR_CREATE_ITEM', e);
  }
};
const deleteItem = async (req, res) => {
  try {
    const { id } = matchedData(req);

    const data = await deleteTrack(id);
    return res.status(200).json({ success: true, data });
  } catch (e) {
    handleHttp(res, 'ERROR_DELETE_ITEM', e);
  }
};
1;
module.exports = { getItems, getItem, postItem, updateItem, deleteItem };
