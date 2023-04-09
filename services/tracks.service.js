const { tracksModel } = require('../models');

const getTracks = async () => {
  const data = await tracksModel.find({});
  return data;
};
const getTrack = async () => {};
const createTrack = async (trackData) => {
  const data = await tracksModel.create(trackData);
  return data;
};
const updateTrack = async () => {};
const deleteTrack = async () => {};

module.exports = {
  getTracks,
  getTrack,
  createTrack,
  updateTrack,
  deleteTrack,
};
