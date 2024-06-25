'use strict';

//https://emojidb.org/documentation-emojis?utm_source=user_search

const about = `DBS TechTrek Bot 🤖 was created as an extension of the DBS TechTrek 2024 where I wanted to learn more about Telegram Bot API 💻 and its functionalities.\n\nThe actual hackathon was held on 20th Jan 2024 📅, where participants with various degree backgrounds 🎓 were grouped into groups of 8-10. The problem statement was to create a basic CRUD full-stack proof of concept itinerary travel application 🧳 with various requirements such as login 🔑 & JWT implementation (compulsory) and good to have add-ons like deployment ☁️ & unit tests (optional).\n\nThroughout the day, coders 👨🏻‍💻 were expect to work together, solve merge conflicts 🛠️, partake in interviews 🤝 with various hiring managers, and present the end product at the end of the day.`;
const apiDocumentation = "📘 Link: <a href='https://docs.google.com/document/d/1uwBqQFhrHikR9pl9s1yidvFapXShNABp_OkhFqPTc8c/edit?usp=sharing'>API documentation</a>";
const contactMe = `Feel free to reach out if you need any assistance 🆘 or have questions! 🧐\n\nView my portfolio (ahloytan.netlify.app) 💼 or contact me (aloysiustan.2020@scis.smu.edu.sg) 📩`;
const help = `🤖 Welcome to DBS TechTrek Bot! 🤖\n\nHere's how you can interact: 💬\n\n1. To utilise all of the bot's functionalities, please connect 🔗 your telegram through the web application (dbs-t10.vercel.app) 🌐\n2. /start - Start ▶️ or restart 🔄 the conversation with the bot 👾\n3. /menu - Access to various functionalities like retrieving your dashboard and itinerary details \u{1F4C8}\n4. <a href='https://www.youtube.com/watch?v=oHg5SJYRHA0&ab_channel=cotter548'>Tutorial</a>\n\nThis telegram bot is still under development 🏗️, so please feel free to drop any feedback 💡 or improvements 💪 that I can make!. `;
const startMsg = "🤖 Welcome to DBS TechTrek Bot! 🤖 To get started, check out what you can do with this bot with the menu provided below! 👋";
const noPermissions = "You do not have permission to access this resource, please try again with proper credentials! ⛔";
const noDashboardDetails = "No dashboard details found! ❌";
const noItineraries = "No itineraries found! ❌";


module.exports = {
    about,
    apiDocumentation,
    contactMe,
    help,
    startMsg,
    noPermissions,
    noDashboardDetails,
    noItineraries
}