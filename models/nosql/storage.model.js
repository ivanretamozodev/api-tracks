const mongoose = require('mongoose');

const StorageSchema = new mongoose.Schema(
  {
    url: { type: String },
    filename: { type: number },
  },
  { timestamps: true, versionKey: false },
);

module.exports = mongoose.model('storages', StorageSchema);
