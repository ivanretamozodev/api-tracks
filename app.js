require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morganBody = require('morgan-body');
const openApiConfiguration = require('./docs/swagger');
const swaggerUi = require('swagger-ui-express');
const dbConnect = require('./config/mongo');
const { loggerStream } = require('./utils/handle-logger');
const app = express();
//MIDDLEWARES
app.use(cors());
app.use(express.json());
app.use(express.static('storage'));

morganBody(app, {
  noColors: true,
  stream: loggerStream,
  skip: function (req, res) {
    return res.statusCode < 400;
  },
});

//DOCUMENTATION
app.use(
  '/documentation',
  swaggerUi.serve,
  swaggerUi.setup(openApiConfiguration),
);

const port = process.env.PORT || 5000;
//ROUTES
app.use('/api', require('./routes'));
//DB CONNECTION
dbConnect();
//SERVER
app.listen(port, () => {
  console.log('APP_ONLINE', port);
});
