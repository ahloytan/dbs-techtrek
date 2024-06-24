'use strict';
const Telegram = require('../../models/telegram');

module.exports = function(bot) {
    bot.on("message", async (ctx) => await Telegram.onMessage(ctx));
    bot.on('sticker', (ctx) => ctx.reply('👍'));
};