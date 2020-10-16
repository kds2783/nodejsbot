const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NzY2NzM2MDE5NzEzNDI1NDI5.X4nskA.qY1o5SNCOnmr_k15NtsZqjPoETQ';
const welcomeChannelName = "〔📛〕ㅣ입장로그";
const byeChannelName = "〔📛〕ㅣ입장로그";
const welcomeChannelComment = "``` 님께서 입장하셨습니다. ```";
const byeChannelComment = "``` 님께서 퇴장하셨습니다. ```";

client.on('ready', () => {
  console.log('[ 어몽어스 ] 실행되었습니다.');
});

client.on("guildMemberAdd", (member) => {
  const guild = member.guild;
  const newUser = member.user;
  const welcomeChannel = guild.channels.find(channel => channel.name == welcomeChannelName);

  welcomeChannel.send(`<@${newUser.id}> ${welcomeChannelComment}\n`);
});

client.on("guildMemberRemove", (member) => {
  const guild = member.guild;
  const deleteUser = member.user;
  const byeChannel = guild.channels.find(channel => channel.name == byeChannelName);

  byeChannel.send(`<@${deleteUser.id}> ${byeChannelComment}\n`);
});

client.on('message', (message) => {
  if(message.content === 'ping') {
    message.reply('pong');
  }
});

client.login(token);