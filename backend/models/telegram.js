'use strict';
const { supabase } = require('../util/db.js');
const { Markup } = require("telegraf");
const Accounts = require('./accounts.js');
const Dashboard = require('./dashboard.js');
const Itineraries = require('./itineraries.js');
const { startMsg, noPermissions, noDashboardDetails, noItineraries, help, about, apiDocumentation, contactMe } = require('../util/telegram/bot-replies');;
const logger = require('../modules/logger');

module.exports = { 
    async startCommand(ctx) {
        const { message } = ctx;

        await ctx.replyWithHTML(startMsg, Markup.keyboard([
                    ['🚀 menu 🚀'],
                    ['help 🙋‍♂️','about this bot 🔎', 'contact me 📲']
        ]).resize());

        await this.preMenuCommand(ctx);

        const text = message?.text;
        const received_unique_code = text ? text.split(' ')[1] : null;

        if (!received_unique_code) return;

        const { data, error: unique_code_error } = await supabase
        .from('user_account')
        .select()
        .eq('unique_code', received_unique_code)

        if (unique_code_error) {
            logger.warn(unique_code_error);
            return;
        }

        if (!data) {
            ctx.reply("Sorry, I have no clue who you are...");
            return;
        }

        const telegramChatId = ctx.message.chat.id;
        const { error: updateTelegramChatIdError } = await supabase
        .from('user_account')
        .update({ 'telegram_chat_id' : telegramChatId })
        .eq('unique_code', received_unique_code);

        if (updateTelegramChatIdError) logger.warn(updateTelegramChatIdError);
    },

    aboutCommand(ctx) {
        ctx.reply(about);
    },

    async preMenuCommand(ctx) {
        await ctx.replyWithHTML("How can I assist you today? 📋", Markup.inlineKeyboard([
            [Markup.button.callback('🚀 menu 🚀', 'menu')],
            [Markup.button.callback('help 🙋‍♂️', 'help')],
            [Markup.button.callback('about this bot 🔎', 'about_this_bot')],
            [Markup.button.callback('contact me 📲', 'contact_me')],
        ]));
    },

    async menuCommand(ctx) {
        await ctx.replyWithHTML("How can I assist you today? 📋", Markup.inlineKeyboard([
            [Markup.button.callback('Dashboard 📊', 'dashboard')],
            [Markup.button.callback('Itineraries 🗺️', 'itineraries')],
            [Markup.button.callback('API Documentation 📝', 'api_documentation')],
        ]));
    },

    async contactMeCommand(ctx) {
        ctx.reply(contactMe);
    },

    async helpCommand(ctx) {
        ctx.replyWithHTML(help, { disable_web_page_preview: true })
    },

    async dashboardCommand(ctx) {
        const telegramChatId = ctx.update.callback_query?.from?.id || ctx.message?.from?.id;
        const { id, role_id } = await Accounts.getUserFromChatId(telegramChatId);

        if (!id) {
            ctx.reply(noPermissions);
            logger.warn(error);
            return;
        }

        const dashboard_details = role_id === 1 ? await Dashboard.getDashboardDetails() : await Dashboard.getUserDashboardDetails(id);
        if (dashboard_details.trafficByCountry.length === 0) {
            ctx.reply(noDashboardDetails);
            return;    
        }

        const formatted_dashboard_details = JSON.stringify(dashboard_details, null, 2);
        ctx.replyWithMarkdownV2(`*Dashboard Details:*\n\`\`\`${formatted_dashboard_details}\`\`\``);
    },

    async itinerariesCommand(ctx) {
        const telegramChatId = await ctx.update.callback_query?.from?.id || ctx.message?.from?.id;
        const { id } = await Accounts.getUserFromChatId(telegramChatId);
        if (!id) {
            ctx.reply(noPermissions);
            logger.warn(error);
            return;
        }

        const itinerary_details = await Itineraries.getUserItineraries(id);
        if (itinerary_details.length === 0) {
            ctx.reply(noItineraries);
            return;
        };

        const formatted_itinerary_details = JSON.stringify(itinerary_details, null, 2);
        ctx.replyWithMarkdownV2(`*Itineraries Details:*\n\`\`\`${formatted_itinerary_details}\`\`\``);
    },

    async apiDocumentationCommand(ctx) {
        ctx.replyWithHTML(apiDocumentation);
    },
    
    async onMessage(ctx) {
        const { message } = ctx;

        const isGroup =
            message?.chat.type === "group" || message?.chat.type === "supergroup";

        if (isGroup) {
            await ctx.reply("This bot is only available in private chats.");
            return;
        }

        const reply = "a message was sent";

        await ctx.reply(reply);
    }

}