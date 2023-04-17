const { tracksModel } = require('../models');

const getTracks = async () => {
  const data = await tracksModel.find({});
  return data;
};
const getTrack = async (id) => {
  const data = await tracksModel.findAllData(id);
  return data;
};
const createTrack = async (trackData) => {
  const data = await tracksModel.create(trackData);
  return data;
};
const updateTrack = async (id, newData) => {
  const data = await tracksModel.findByIdAndUpdate(id, newData, { new: true });
  return data;
};
const deleteTrack = async (id) => {
  const data = await tracksModel.findByIdAndDelete(id);
  return data;
};

module.exports = {
  getTracks,
  getTrack,
  createTrack,
  updateTrack,
  deleteTrack,
};
