const express = require('express');
const cors = require('cors');
const app = express();
const logger = require('./modules/logger');
require('dotenv').config();
const { FE_PREVIEW_ENDPOINT, FE_ENDPOINT, FE_ENDPOINT_1, FE_ENDPOINT_2, FE_ENDPOINT_3 } = process.env;

app.use(express.json()); 
app.use(
  cors({
    origin: ['http://localhost:3000', FE_PREVIEW_ENDPOINT, FE_ENDPOINT, FE_ENDPOINT_1, FE_ENDPOINT_2, FE_ENDPOINT_3],
    credentials: true
  })
);

app.get('/', (req, res) => {
  res.status(200).send('ok');
});

let apiRouter = require('./api/index');
app.use('/', apiRouter);

app.use(function(err, req, res, next) {
  logger.error(err);
  res.status(err.status || 500);
  res.json({
      message: err.message
  });
});

module.exports = app;