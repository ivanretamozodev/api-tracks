const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    name: { type: String },
    age: { type: number },
    email: { type: String, unique: true },
    pasword: { type: string },
    role: { type: ['user', 'admin'], default: 'user' },
  },
  { timestamps: true, versionKey: false },
);

module.exports = mongoose.model('users', UserSchema);
