const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log("i'm ready bitchez")
  client.user.setActivity('www.divinerealms.us', { type: 'WATCHING' })
});
client.login(process.env.BOT_TOKEN);
