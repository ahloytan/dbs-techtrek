const { Telegraf } = require("telegraf");
const { TELEGRAM_SECRET_HASH, TELEGRAM_BOT_TOKEN, BE_ENDPOINT } = process.env;
const bot = new Telegraf(TELEGRAM_BOT_TOKEN);
const BASE_PATH = BE_ENDPOINT ?? "https://589c-219-74-105-56.ngrok-free.app";
const logger = require('../modules/logger');
const botHears = require('../util/telegram/bot-hears');
const botCommands = require('../util/telegram/bot-commands');
const botActions = require('../util/telegram/bot-actions');
const botOn = require('../util/telegram/bot-on');

botHears(bot);
botCommands(bot);
botActions(bot);
botOn(bot);

async function handleTelegramHook(req, res) {
  try {
    const { body, query } = req;

    if (query.setWebhook === "true") {
      const webhookUrl = `${BASE_PATH}/telegram?TELEGRAM_SECRET_HASH=${TELEGRAM_SECRET_HASH}`;
      const isSet = await bot.telegram.setWebhook(webhookUrl);
      logger.info(`Set webhook to ${webhookUrl}: ${isSet}`);
    }

    if (query.TELEGRAM_SECRET_HASH === TELEGRAM_SECRET_HASH) await bot.handleUpdate(body);
    
  } catch (error) {
    logger.warn(error.toString());
  }

  res.status(200).send("Telegram request handled successfully!");
}

module.exports = handleTelegramHook;