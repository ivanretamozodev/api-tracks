const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    name: { type: String },
    age: { type: Number },
    email: { type: String, unique: true },
    pasword: { type: String },
    role: { type: ['user', 'admin'], default: 'user' },
  },
  { timestamps: true, versionKey: false },
);

module.exports = mongoose.model('users', UserSchema);
