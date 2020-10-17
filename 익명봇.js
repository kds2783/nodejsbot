const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token

client.on('ready', () => {
  console.log('켰다.');
  client.user.setPresence({ game: { name: '⭐ 익명 메세지 ⭐' }, status: 'online' })
});

client.on('message', (message) => {
  if(message.content === 'ping') {
    message.reply('pong');
  }
});

client.login(token);