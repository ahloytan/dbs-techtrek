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
    bot.action("help", async (ctx) => await Telegram.helpCommand(ctx));
    bot.action("about_this_bot", async (ctx) => await Telegram.aboutCommand(ctx));
    bot.action("contact_me", async (ctx) => await Telegram.contactMeCommand(ctx));
}