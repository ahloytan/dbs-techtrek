const express = require('express');
const cors = require('cors');
const app = express();
const logger = require('./modules/logger');
require('dotenv').config();
const { FE_PREVIEW_ENDPOINT, FE_ENDPOINT } = process.env;

app.use(express.json()); 
app.use(
  cors({
    origin: ['http://localhost:3000', FE_PREVIEW_ENDPOINT, FE_ENDPOINT],
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