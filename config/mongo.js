const mongoose = require('mongoose');

const dbConnect = () => {
  const DATABASE_CNN = process.env.DATABASE_CNN || '';
  mongoose
    .connect(DATABASE_CNN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log('DB_ONLINE'))
    .catch((e) => console.log('DB_ERROR', e));
};

module.exports = dbConnect;
