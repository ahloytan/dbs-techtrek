const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;
const logger = require('./modules/logger');
require('dotenv').config();


app.use(express.json()) 
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true
  })
);

app.get('/', (req, res) => {
  res.status(200).send('ok');
});

let apiRouter = require('./api/index');
app.use('/api', apiRouter);

const bot = require('./modules/telegramBot');
bot.launch();

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.use(function(err, req, res, next) {
  logger.error(err);
  res.sendStatus(err.status || 500);
});

module.exports = app;
