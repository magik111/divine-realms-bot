const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  client.user.setPresence({ game: { name: 'at www.divinerealms.us', type: 0 } });
});

client.on("message", message => {
var args = message.content.split(/[ ]+/)
const embed = new Discord.RichEmbed()
  .setDescription(`Divine Realms [website](https://www.divinerealms.us), a minecraft ip je DivineRealms.serv.nu`)
  .setAuthor(`Divine Realms`, `${client.user.displayAvatarURL}`)
  .setColor([0, 255, 153])
  .setFooter("Copyright PickledPotato, 2016-2017")
  .setTimestamp(new Date())
  if(message.guild.id === "237171768693882890" && message.content.startsWith("--report")){
    message.channel.send({embed});
    
        }};
    });

client.login(process.env.BOT_TOKEN);
