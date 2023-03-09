const Discord = require("discord.js");
const db = require("quick.db");
const emotes = require("../../config/emojis.json");

module.exports = {
  name: "profile",
  description: 'Check your or your friend\'s profile!',
  category: "info",
  usage: '<user>',
  aliases: ['prof', 'profile', 'info'],
  run: async (bot, message, args) => {


    let user = message.mentions.members.first() || message.author;

    

    let moneyEmbed = new Discord.MessageEmbed()
      .setColor("#FFFFFF")
      
    if (message.author.id === user.id) {
      moneyEmbed.setThumbnail(message.author.displayAvatarURL())
      .setDescription(`**${message.author.username}'s Profile**\n\nID: ||${message.author.id}||`)
      .setTitle(`**${message.author.tag}**`);
      message.channel.send(moneyEmbed);
    }
    else {
      moneyEmbed.setThumbnail(user.user.displayAvatarURL())
      .setDescription(`**${user.user.username}'s Profile**\n\nID: ${user.user.id}`)
      .setTitle(`**${user.user.tag}**`);
      message.channel.send(moneyEmbed);
    }

  },
}