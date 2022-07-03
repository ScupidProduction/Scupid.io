const { Client } = require('discord.js');
const dotenv = require('dotenv');
dotenv.config();

const client = new Client({ intents: 1});

client.once('ready', () => {
    console.log("Bot ON !");
});

client.login(process.env.BOT_TOKEN);