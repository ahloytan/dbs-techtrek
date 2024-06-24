'use strict';
const Telegram = require('../../models/telegram');

module.exports = function(bot) {
    bot.action(/.+/, async (ctx, next) => {
        await ctx.answerCbQuery(`Going to ${ctx.match[0]}`);
        await next();
    });

    bot.action('menu', async (ctx) => await Telegram.menuCommand(ctx));
    bot.action("dashboard", async (ctx) => await Telegram.dashboardCommand(ctx));
    bot.action("itineraries", async (ctx) => await Telegram.itinerariesCommand(ctx));
    bot.action("api_documentation", async (ctx) => await Telegram.apiDocumentationCommand(ctx));
}