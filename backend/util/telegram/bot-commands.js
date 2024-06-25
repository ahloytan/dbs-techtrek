'use strict';
const Telegram = require('../../models/telegram');

module.exports = function(bot) {
    bot.command("start", async (ctx) => await Telegram.startCommand(ctx));
    bot.command("menu", async (ctx) => await Telegram.menuCommand(ctx));
    bot.command("help", async (ctx) => await Telegram.helpCommand(ctx));
    bot.command("about_this_bot", async (ctx) => await Telegram.aboutCommand(ctx));
    bot.command("contact_me", async (ctx) => await Telegram.contactMeCommand(ctx));

    bot.telegram.setMyCommands([
        {
            command: 'start',
            description: 'Welcome to DBSTechTrek Bot!'
        },
        {
            command: 'menu',
            description: 'See what you can do with this bot'
        },
        {
            command: 'help',
            description: 'I need help!'
        },
        {
            command: 'about_this_bot',
            description: 'About DBS TechTrek Bot'
        },
        {
            command: 'contact_me',
            description: 'Contact Me'
        }
    ]);
}