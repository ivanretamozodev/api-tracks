require('dotenv').config();
const express = require('express');
const cors = require('cors');
const dbConnect = require('./config/mongo');
const app = express();
//MIDDLEWARES
app.use(cors());
app.use(express.json());
app.use(express.static('storage'));

const port = process.env.PORT || 5000;
//ROUTES
app.use('/api', require('./routes'));
//DB CONNECTION
dbConnect();
//SERVER
app.listen(port, () => {
  console.log('APP_ONLINE', port);
});
