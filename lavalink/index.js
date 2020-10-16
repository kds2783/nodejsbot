const Discord = require('discord.js');
const bot = Discord.Client();

const config = require('./database/config.json');



bot.login(config.token);