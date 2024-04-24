'use strict';
const { supabase } = require('../util/db.js');
const startMsg = "Welcome to DBS TechTrek Bot! To get started, use /help to view the list of commands or check out what you can do with this bot with the menu provided below!";
const Dashboard = require('./dashboard.js');
const Itineraries = require('./itineraries.js');
const logger = require('../modules/logger');

module.exports = { 
    async startCommand(ctx) {
        const { message } = ctx;

        ctx.reply(startMsg);
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

        const telegram_chat_id = ctx.message.chat.id;
        const { error: update_telegram_chat_id_error } = await supabase
        .from('user_account')
        .update({ telegram_chat_id })
        .eq('unique_code', received_unique_code);

        if (update_telegram_chat_id_error) logger.warn(update_telegram_chat_id_error);
    },

    async helpCommand(ctx) {
        ctx.replyWithHTML(
            `\u{1F4AC} Welcome to DBS TechTrek Bot! \u{1F4AC}

            Here's how you can interact:

            1. To utilise all of the bot's functionalities, please connect your telegram through the website (dbs-t10.vercel.app)
            2. /start - Start or restart the conversation with the bot \u{2139}
            3. /dashboard - Retrieve your dashboard details \u{1F4C8}
            4. <a href='https://docs.google.com/document/d/1uwBqQFhrHikR9pl9s1yidvFapXShNABp_OkhFqPTc8c/edit?usp=sharing'>API documentation</a>
            5. <a href='https://www.youtube.com/watch?v=oHg5SJYRHA0&ab_channel=cotter548'>Tutorial</a>

            This telegram bot is still under development. Feel free to reach out if you need any assistance or have questions!

            View my portfolio (ahloytan.netlify.app)\u{1F37B} or contact me (aloysiustan.2020@scis.smu.edu.sg)\u{1F4E7}`
        ,{ disable_web_page_preview: true })
    },

    async itinerariesCommand(ctx) {
        const telegram_chat_id = ctx.message.chat.id;
        const { data, error } = await supabase
            .from('user_account')
            .select('id, role_id')
            .eq('telegram_chat_id', telegram_chat_id)

        if (data.length === 0 || error) {
            ctx.reply("You do not have permission to access this resource, please try again with proper credentials!");
            logger.warn(error);
            return;
        }

        const { id, role_id } = data[0];
        const dashboard_details = role_id === 1 ? await Dashboard.getDashboardDetails() : await Dashboard.getUserDashboardDetails(id);
        if (dashboard_details.length === 0) ctx.reply("No dashboard details found!");

        const formatted_dashboard_details = JSON.stringify(dashboard_details, null, 2);
        ctx.replyWithMarkdownV2(`*Object Details:*\n\`\`\`${formatted_dashboard_details}\`\`\``);
    },

    async dashboardCommand(ctx) {
        const telegram_chat_id = ctx.message.chat.id;
        const { data, error } = await supabase
            .from('user_account')
            .select('id')
            .eq('telegram_chat_id', telegram_chat_id)

        if (data.length === 0 || error) {
            ctx.reply("You do not have permission to access this resource, please try again with proper credentials!");
            logger.warn(error);
            return;
        }

        const { id } = data[0];
        const itinerary_details = await Itineraries.getUserItineraries(id);
        if (itinerary_details.length === 0) ctx.reply("No itineraries found!");

        const formatted_itinerary_details = JSON.stringify(itinerary_details, null, 2);
        ctx.replyWithMarkdownV2(`*Itineraries Details:*\n\`\`\`${formatted_itinerary_details}\`\`\``);
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