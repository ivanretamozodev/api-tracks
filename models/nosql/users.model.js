const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    name: { type: String },
    age: { type: Number },
    email: { type: String, unique: true },
    password: { type: String, required: true },
    role: { type: ['user', 'admin'], default: 'user' },
  },
  { timestamps: true, versionKey: false },
);

UserSchema.method('toJSON', function () {
  const { __v, _id, password, ...object } = this.toObject();
  object.id = _id;
  return object;
});

module.exports = mongoose.model('users', UserSchema);
