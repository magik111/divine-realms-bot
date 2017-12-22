const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  client.user.setPresence({ game: { name: 'at www.divinerealms.us', type: 0 } });
});
//Website
client.on("message", message => {
var args = message.content.split(/[ ]+/)
const embed = new Discord.RichEmbed()
  .addField(`Website je [Divine Realms]("https://www.divinerealms.us")`)
  .setAuthor(`${message.author.username} prijava:`, `${message.author.displayAvatarURL}`)
  .setColor([0, 255, 153])
  .setFooter("© PickledPotato, 2017")
  .setTimestamp(new Date())
  if(message.guild.id === "237171768693882890" && message.content.startsWith("--website")){
 message.channel.send({embed})
  };
client.login(process.env.BOT_TOKEN);
