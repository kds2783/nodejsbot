const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NzY2NzM2MDE5NzEzNDI1NDI5.X4nskA.X0oBGGBsc9HCxwm5imkd6vCVmP4';

client.on('ready', () => {
  console.log('켰다.');
});

client.on('message', (message) => {
  if(message.content === 'ping') {
    message.reply('pong');
  }
});

client.login(token);