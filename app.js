require('dotenv').config();
const express = require('express');
const cors = require('cors');
const dbConnect = require('./config/mongo');

const app = express();
app.use(cors());

const port = process.env.PORT || 5000;

dbConnect();

app.listen(port, () => {
  console.log('APP_ONLINE', port);
});
