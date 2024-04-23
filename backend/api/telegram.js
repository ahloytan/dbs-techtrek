const { Telegraf } = require("telegraf");
const { TELEGRAM_SECRET_HASH, TELEGRAM_BOT_TOKEN, BE_ENDPOINT } = process.env;
const bot = new Telegraf(TELEGRAM_BOT_TOKEN);
const Telegram = require('../models/telegram');
const BASE_PATH = process.env.NODE_ENV === "production" ? BE_ENDPOINT : "https://4f70-219-74-105-56.ngrok-free.app";

bot.command("start", async (ctx) => await Telegram.startCommand(ctx));
bot.command("help", async (ctx) => await Telegram.helpCommand(ctx));
bot.command("itineraries", async (ctx) => await Telegram.itinerariesCommand(ctx));
bot.on("dashboard", async (ctx) => await Telegram.dashboardCommand(ctx));
bot.on("message", async (ctx) => await Telegram.onMessage(ctx));
bot.on('sticker', (ctx) => ctx.reply('👍'));
bot.hears('hi', (ctx) => ctx.reply("ahha oik"));

bot.telegram.setMyCommands([
  {
    command: 'start',
    description: 'Welcome to DBSTechTrek Bot!',
  },
  {
    command: 'help',
    description: 'View bot capabilities',
  },
  {
    command: 'itineraries',
    description: 'Get itineraries details',
  },
  {
    command: 'dashboard',
    description: 'Get dashboard details',
  }
]);

async function handleTelegramHook(req, res) {
  try {
    const { body, query } = req;

    if (query.setWebhook === "true") {
      const webhookUrl = `${BASE_PATH}/telegram?TELEGRAM_SECRET_HASH=${TELEGRAM_SECRET_HASH}`;
      const isSet = await bot.telegram.setWebhook(webhookUrl);
      console.log(`Set webhook to ${webhookUrl}: ${isSet}`);
    }

    if (query.TELEGRAM_SECRET_HASH === TELEGRAM_SECRET_HASH) await bot.handleUpdate(body);
    
  } catch (error) {
    console.error("Error sending message");
    console.log(error.toString());
  }

  res.status(200).send("Telegram request handled successfully!");
}

module.exports = handleTelegramHook;