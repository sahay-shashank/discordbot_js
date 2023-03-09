
const emotes = require("../../config/emojis.json");
const db = require('quick.db');
const Discord = require('discord.js')
const { default_prefix } = require('../../config/config.json');
module.exports = {
  name: "say",
  description: "Get the bot to say what ever you want(FOR ADMINS ONLY)!",
  usage: "<msg>",
  category: 'misc',
  aliases: ['say'],
  run: async (bot, message, args) => {
    
    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = default_prefix;
    if (!message.member.permissions.has("ADMINISTRATOR")) return;
    let MSG = message.content.split(`${prefix}say`).join("");
    if (!MSG)
      return message.channel.send(`You did not specify your message to send!`);
    message.channel.send(MSG);
    message.delete();
  },
};