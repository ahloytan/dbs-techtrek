'use strict';
const Telegram = require('../../models/telegram');

module.exports = function(bot) {
    bot.hears('hi', (ctx) => ctx.reply("ahha oik"));
    bot.hears('🚀 menu 🚀', async (ctx) => await Telegram.menuCommand(ctx));
    bot.hears('help 🙋‍♂️', async (ctx) => await Telegram.helpCommand(ctx));
    bot.hears('about this bot 🔎', async (ctx) => await Telegram.aboutCommand(ctx));
    bot.hears('contact me 📲', async (ctx) => await Telegram.contactMeCommand(ctx));
}