const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  client.user.setPresence({ game: { name: 'at www.divinerealms.us', type: 0 } });
});
//Report
client.on("message", message => {
var args = message.content.split(/[ ]+/)
const embed = new Discord.RichEmbed()
  .setDescription((args.join(" ").substring(8)))
  .setAuthor(`${message.author.username} prijava:`, `${message.author.displayAvatarURL}`)
  .setColor([66, 134, 244])
  .setFooter("© PickledPotato, 2017")
  .addField("Hvala na strpljenju!", "Vasu prijavu ce pogledati staff clan sto brze moguce." )
  if(message.guild.id === "237171768693882890" && message.content.startsWith("--report")){
    if(args.length === 1){
       message.channel.send("Nedostaje argument. `--report (tekst)` da pravilno postavite prijavu.");
     } else {
    client.channels.get("361531026658557963").send({embed});
    message.delete(setTimeout(function () {

        }, 0));
        }};
    });
//Promo
client.on("message", message => {
var args = message.content.split(/[ ]+/)
const embed = new Discord.RichEmbed()
  .setDescription((args.join(" ").substring(8)))
  .setAuthor(`Prijava od ${message.author.username}:`, `${message.author.displayAvatarURL}`)
  .setColor([66, 134, 244])
  .setFooter("© PickledPotato, 2017")
  if(message.guild.id === "237171768693882890" && message.content.startsWith("--promo")){
    if(args.length === 1){
       message.channel.send("Nedostaje argument. `--promo (dokaz uploadan na imgur.com ili pomocu Lightshota)` da pravilno postavite prijavu.");
     } else {
    client.channels.get("381804087202676736").send({embed});
    message.delete(setTimeout(function () {

        }, 0));
        }};
    });
//Ping
  if(message.content.startsWith(prefix + "ping")) {
    message.delete(setTimeout(function () {

    }, 10));
    message.channel.send('[**Beat**] - Pinging...').then(sent => {
      sent.edit(`[**DivineRealms**] - Pong! Trajalo je ${sent.createdTimestamp - message.createdTimestamp}ms (**${message.author.username}**)`);
        })
      }
    });

client.login(process.env.BOT_TOKEN);
