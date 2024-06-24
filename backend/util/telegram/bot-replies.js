'use strict';
const about = `DBS TechTrek Bot 🤖 was created as an extension of the DBS TechTrek 2024 where I wanted to learn more about Telegram Bot API 💻 and its functionalities.\n\nThe actual hackathon was held on 20th Jan 2024 📅, where participants with various degree backgrounds 🎓 were grouped into groups of 8-10. The problem statement was to create a basic CRUD full-stack proof of concept itinerary travel application 🧳 with various requirements such as login 🔑 & JWT implementation (compulsory) and good to have add-ons like deployment ☁️ & unit tests (optional).\n\nThroughout the day, coders 👨🏻‍💻 were expect to work together, solve merge conflicts 🛠️, partake in interviews 🤝 with various hiring managers, and present the end product at the end of the day.`;
const help = `\u{1F4AC} Welcome to DBS TechTrek Bot! \u{1F4AC}\n\nHere's how you can interact:\n\n1. To utilise all of the bot's functionalities, please connect your telegram through the website (dbs-t10.vercel.app)\n2. /start - Start or restart the conversation with the bot \u{2139}\n3. /dashboard - Retrieve your dashboard details \u{1F4C8}\n4. \n5. <a href='https://www.youtube.com/watch?v=oHg5SJYRHA0&ab_channel=cotter548'>Tutorial</a>\n\nThis telegram bot is still under development. Feel free to reach out if you need any assistance or have questions!\n\nView my portfolio (ahloytan.netlify.app)\u{1F37B} or contact me (aloysiustan.2020@scis.smu.edu.sg)\u{1F4E7}`;
const startMsg = "🤖 Welcome to DBS TechTrek Bot! 🤖 To get started, check out what you can do with this bot with the menu provided below!";
const noPermissions = "You do not have permission to access this resource, please try again with proper credentials!";
const noDashboardDetails = "No dashboard details found!";
const noItineraries = "No itineraries found!";

module.exports = {
    about,
    help,
    startMsg,
    noPermissions,
    noDashboardDetails,
    noItineraries
}